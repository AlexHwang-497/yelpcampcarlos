const Campground = require('../models/camground')


module.exports.index = async (req, res)=> {
    // decalre our variable
    const campgrounds = await Campground.find({})
    // we will then take our varialbe and pass it through our tempalte
    res.render('campgrounds/index', {campgrounds})

}

module.exports.renderNewForm = (req,res)=> {
    // this is where we will render our new form
    // ***remember everytime we have to create a file in EJS/campgrounds folder to make this work***
    // if(!req.isAuthenticated()){
    //     req.flash('error', 'you must be sgined in')
    //     return res.redirect('/login')
    // }
    res.render('campgrounds/new')
}

module.exports.createCampground = async(req, res, next)=> {
    // ///////we originally had the try/catch statment that is used with router.use((err,req,res,next)=>{ res.send('Oh Boy!!!, something went wrong')
    // ///////because we have catchAsync.js, we no longer need the try and catch statment
    ///////// in addition we need to the wrap catchasync around async
    
    
    // if this doesnt exist, we  throw the express error here because we are insdie the async function
    // and you throw it then our catch asyncy is going to catch the error and hnd it off to next which goes down to router.use...
    
    // ///////we don't need this anymore because we are using JOI
    // *******if(!req.body.campground) throw new ExpressError('invalid campground data', 400)///////////////
    
    // this is going to validate our data becore we even attempt to save it with mongoose
    // we just pass joi the differnt things we are looking for
    
    // we need to take request up body of campground  and route and submit/create a new campground
    // this is our new model
    const campground = new Campground(req.body.campground)
    // this will save the authur
    campground.author=req.user._id
    await campground.save()
    req.flash('success','successfully made a new campground!')
    // we then redirect
    res.redirect(`/campgrounds/${campground._id}`)
///////////////////////////////////////////////////////////
// try{
//     // we need to take request up body of campground  and route and submit/create a new campground
//     // this is our new model
//     const campground = new Campground(req.body.campground)
//     await campground.save()
//     // we then redirect
//     res.redirect(`/campgrounds/${campground._id}`)
//     // this is a catch with error(e) passed in
// } catch(e) {
//     // we then pass the whole thing onto next
//     // which when hitting this it should send this down to the error handler below aka res.send('Oh Boy!!!, something went wrong')
//     next(e)
}


module.exports.showCampground = async(req, res)=>{
    const campground = await Campground.findById(req.params.id).populate({
        path: 'reviews',
        populate: {
            path: 'author'
        }
    }).populate('author');
    console.log(campground)
    // this utilizes the flash;  and will flash when the campground doesnt exist
    if(!campground){
        req.flash('error', 'Cannont find that campground!!')
        return res.redirect('/campgrounds')
    }
    // this will pop up when we put down a fake id
    res.render('campgrounds/show', {campground})
}


module.exports.renderEditForm = async(req, res)=>{
    const {id} = req.params
    const campground = await Campground.findById(id)
        // if campgroudn author and user id arent' the same....this is dealing with authroization
 
    // this utilizes the flash;  and will flash when the campground doesnt exist
    if(!campground){
        req.flash('error', 'Cannont find that campground!!')
        return res.redirect('/campgrounds')
    }
    
    res.render('campgrounds/edit', {campground})
}

module.exports.updateCampground=async(req, res)=>{
    // this gives us the ID
    const { id } = req.params;
    
    // the second argument is the second query to update, we take whatever is in req.body.campground w/ a spread operator
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    // for the flash 
    req.flash('success','Successfully updated campground!!!')
    res.redirect(`/campgrounds/${campground._id}`)
    
}

module.exports.deleteCampground = async(req, res)=>{
    const {id} = req.params;
    await Campground.findByIdAndDelete(id)
    // flash for awknoledging  review is deleted
    req.flash('success','Succesfully deleted campground!!!')
    res.redirect('/campgrounds')

}