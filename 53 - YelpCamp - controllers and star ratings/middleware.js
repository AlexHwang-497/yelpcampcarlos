const {campgroundSchema, reviewSchema} = require('./schemas.js')
const ExpressError = require('./utils/ExpressError')
const Campground = require('./models/camground')
const Review = require('./models/review')

module.exports.isLoggedIn = (req,res,next) => {
    // this help us determine if the user is logged in
    // console.log('REQ.USER...',req.user)
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl
        req.flash('error','you must be signed in first!')
        return res.redirect('/login')
    }
    next()
}


// this is middleware
module.exports.validateCampground = (req, res, next) =>{
    // this is then going to pass our data through the schema
    const {error} = campgroundSchema.validate(req.body);
    if(error){
        // what this is essentailly doing here is if on the form, you don't fill out the correct data
        // it will tell you that for ex.  "camp ground price must be greater to or equal to 0..."
        const msg = error.details.map(el =>el.message).join(',')
        throw new ExpressError(msg,400)
    } else {
        next()
    }
}

// we create this function here to see if the current user is the author of the property
// this will give you rights to edit the page and etc...
// this is middleware
module.exports.isAuthor = async(req,res,next) => {
    const {id} = req.params
    const campground = await Campground.findById(id)
    // if campgroudn author and user id arent' the same....this is dealing with authroization
    if(!campground.author.equals(req.user._id)){
        // we will flash an error
        req.flash('error', 'You do not have permission to do that!!')
        // we will then redirect user to 
        return res.redirect(`/campgrounds/${id}`)
    }
    next()
}
module.exports.isReviewAuthor = async(req,res,next) => {
    const {id, reviewId} = req.params
    const review = await Review.findById(reviewId)
    // if campgroudn author and user id arent' the same....this is dealing with authroization
    if(!review.author.equals(req.user._id)){
        // we will flash an error
        req.flash('error', 'You do not have permission to do that!!')
        // we will then redirect user to 
        return res.redirect(`/campgrounds/${id}`)
    }
    next()
}


module.exports.validateReview = (req, res, next)=>{
    const {error} = reviewSchema.validate(req.body)
    if(error){
        console.log(error)
        const msg = error.details.map(el =>el.message).join(',')
        throw new ExpressError(msg,400)
    } else {
        next()
    }
}
