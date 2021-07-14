const Campground = require('../models/camground')
const Review = require('../models/review');

module.exports.createReview = async(req,res)=>{
    // res.send('you made it!!')
    // ***if we don't include this line we will get a null for campground***this is related to above
    const campground = await Campground.findById(req.params.id)
    const review = new Review(req.body.review)
    review.author = req.user._id
    campground.reviews.push(review)
    await review.save()
    await campground.save()
    // flash for awknoledging new review is created
    req.flash('success','Created new Review!!!')
    res.redirect(`/campgrounds/${campground._id}`)
}

module.exports.deleteReview = async(req,res)=>{
    const {id, reviewId} = req.params;
    await Campground.findByIdAndUpdate(id, {$pull:{reviews: reviewId}})
    await Review.findByIdAndDelete(reviewId)
    // flash for awknoledging  review is deleted
    req.flash('success','Succesfully deleted review!!!')
    res.redirect(`/campgrounds/${id}`)
    
}
