const Campground = require('../models/campground');
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });
const { cloudinary } = require("../cloudinary");


module.exports.index = async (req, res) => {
    // decalre our variable
    const campgrounds = await Campground.find({}).populate('popupText');
    // we will then take our varialbe and pass it through our tempalte
    res.render('campgrounds/index', { campgrounds })
}

module.exports.renderNewForm = (req, res) => {
    // this is where we will render our new form
    // ***remember everytime we have to create a file in EJS/campgrounds folder to make this work***
    // if(!req.isAuthenticated()){
    //     req.flash('error', 'you must be sgined in')
    //     return res.redirect('/login')
    // }
    res.render('campgrounds/new');
}

module.exports.createCampground = async (req, res, next) => {
    const geoData = await geocoder.forwardGeocode({
        query: req.body.campground.location,
        limit: 1
    }).send()
        // this is going to validate our data becore we even attempt to save it with mongoose
    // we just pass joi the differnt things we are looking for
    // we need to take request up body of campground  and route and submit/create a new campground
    // this is our new model
    const campground = new Campground(req.body.campground);
    campground.geometry = geoData.body.features[0].geometry;
    campground.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    // this will save the authur
    campground.author = req.user._id;
    await campground.save();
    console.log(campground);
    req.flash('success', 'Successfully made a new campground!');
    // we then redirect
    res.redirect(`/campgrounds/${campground._id}`)
}

module.exports.showCampground = async (req, res,) => {
    const campground = await Campground.findById(req.params.id).populate({
        path: 'reviews',
        populate: {
            path: 'author'
        }
    }).populate('author');
    // this utilizes the flash;  and will flash when the campground doesnt exist
    if (!campground) {
        req.flash('error', 'Cannot find that campground!');
        return res.redirect('/campgrounds');
    }
    // this will pop up when we put down a fake id
    res.render('campgrounds/show', { campground });
}

module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id)
    // if campgroudn author and user id arent' the same....this is dealing with authroization
    // this utilizes the flash;  and will flash when the campground doesnt exist
    if (!campground) {
        req.flash('error', 'Cannot find that campground!');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/edit', { campground });
}

module.exports.updateCampground = async (req, res) => {
    // this gives us the ID
    const { id } = req.params;
    console.log(req.body);
    // the second argument is the second query to update, we take whatever is in req.body.campground w/ a spread operator
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }));
    campground.images.push(...imgs);
    await campground.save();
    if (req.body.deleteImages) {
        for (let filename of req.body.deleteImages) {
            await cloudinary.uploader.destroy(filename);
        }
        await campground.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } })
    }
    // for the flash 
    req.flash('success', 'Successfully updated campground!');
    res.redirect(`/campgrounds/${campground._id}`)
}

module.exports.deleteCampground = async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    // flash for awknoledging  review is deleted
    req.flash('success', 'Successfully deleted campground')
    res.redirect('/campgrounds');
}