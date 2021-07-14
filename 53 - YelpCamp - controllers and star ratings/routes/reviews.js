const express = require('express')
// we need this line
// ***if we don't include this line we will get a null for campground
// this merges everythin in this line  of app.use('/campgrounds/:id/reviews',reviews)
const router = express.Router({ mergeParams: true });
// this is for our middleware document
const {validateReview, isLoggedIn, isReviewAuthor} = require('../middleware')
const Campground = require('../models/camground')
const Review = require('../models/review');
const {campgroundSchema, reviewSchema} = require('../schemas.js')
const ExpressError = require('../utils/ExpressError')
const catchAsync = require('../utils/catchAsync')
const reviews = require('../controllers/reviews')




// this is the code that we write to post new reviews
router.post('/', isLoggedIn, validateReview,catchAsync(reviews.createReview))

// this is the code of where we can delete review entries
// what we are tyring to do here is delete a specific ID#
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))

module.exports=router