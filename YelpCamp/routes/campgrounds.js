const express = require('express')
const router = express.Router()
// this is for our controller
const campgrounds = require('../controllers/campgrounds')
const catchAsync = require('../utils/catchAsync')
// this connects our middleware to the file
const {isLoggedIn, isAuthor, validateCampground} = require('../middleware')
const Campground = require('../models/camground')
const ExpressError = require('../utils/ExpressError')
const Review = require('../models/review');
const {campgroundSchema, reviewSchema} = require('../schemas.js')
// this is the cloudnary storage varialbe
// this is for our images uploading 
const multer = require('multer')
const {storage} = require('../cloudinary')
const upload = multer({ storage })

router.route('/')
    .get(catchAsync(campgrounds.index))
    // .post(isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground))
    // this here will help us upload our images into our website.  because of this an uploads folder below seeds is created to store the file
    // upload.single = 1 pic, upload.array = many pics aka an array of pics
    .post(upload.array('image'), (req,res)=>{
        console.log(req.body, req.files)
        res.send('it worked!!')
    })

router.get('/new', isLoggedIn, campgrounds.renderNewForm)

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthor, validateCampground, catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm))



module.exports = router;


// // start of CRUD process.  
// // req = you are requesting from data from the server and then 

// router.get('/', catchAsync(campgrounds.index))

// // this is where we will new look to create a new campground entry in our website
// // we oringally have this below campgrounds ID, but if you put it below computer will freeze, hence you need to put it above the ID
// router.get('/new', isLoggedIn, campgrounds.renderNewForm)

// // this is where the form is submitted to aka the post
// // so what's going to happen is there will be an error thrown in here from monggose, we are going to catch it 
// // catch with async and pass it to next.  the whole existnece of this function is just to do that

// router.post('/', isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground))

// // this is going to help us setup/show our details page for the campgrouund
// // we need the id here to look up for our corresponding database
// router.get('/:id', catchAsync(campgrounds.showCampground))

// // this here is  the route for the form, that serves the formtated get route
// router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm))

// // setitin up put route as an example or a put rout rather or delte or patch for campgrounds
// // this section is related to edit.ejs
// router.put('/:id', validateCampground, catchAsync(campgrounds.updateCampground))

// // this is where we dlete 
// router.delete('/:id', isLoggedIn, isAuthor, catchAsync(campgrounds.delete))

// module.exports=router