const express = require('express')
// we need this line
// ***if we don't include this line we will get a null for campground
// this merges everythin in this line  of app.use('/campgrounds/:id/reviews',reviews)
const router = express.Router({ mergeParams: true });


const Campground = require('../models/camground')
const Review = require('../models/review');

const {campgroundSchema, reviewSchema} = require('../schemas.js')

const ExpressError = require('../utils/ExpressError')
const catchAsync = require('../utils/catchAsync')


const validateReview = (req, res, next)=>{
    const {error} = reviewSchema.validate(req.body)
    if(error){
        console.log(error)
        const msg = error.details.map(el =>el.message).join(',')
        throw new ExpressError(msg,400)
    } else {
        next()
    }

}


// this is the code that we write to post new reviews
router.post('/', validateReview,catchAsync(async(req,res)=>{
    // res.send('you made it!!')
    // ***if we don't include this line we will get a null for campground***this is related to above
    const campground = await Campground.findById(req.params.id)
    const review = new Review(req.body.review)
    campground.reviews.push(review)
    await review.save()
    await campground.save()
    // flash for awknoledging new review is created
    req.flash('success','Created new Review!!!')
    res.redirect(`/campgrounds/${campground._id}`)

}))

// this is the code of where we can delete review entries
// what we are tyring to do here is delete a specific ID#
router.delete('/:reviewId', catchAsync(async(req,res)=>{
    const {id, reviewId} = req.params;
    await Campground.findByIdAndUpdate(id,{$pull:{reviews: reviewId}})
    await Review.findByIdAndDelete(reviewId)
    // flash for awknoledging  review is deleted
    req.flash('success','Succesfully deleted review!!!')
    res.redirect(`/campgrounds/${id}`)
    
}))

module.exports=router