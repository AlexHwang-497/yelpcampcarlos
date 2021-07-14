const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campgrounds');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

const Campground = require('../models/campground');

////////////we did this part in  the beginning to test out to make sure we were getting the images to the cloud server
// .post(upload.array('image'), (req,res)=> {
//     // res.send(req.body, req.file)
//     console.log(req.body, req.files)
//     res.send('it worked?!')
// })


router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(isLoggedIn, upload.array('image'), validateCampground, catchAsync(campgrounds.createCampground))


router.get('/new', isLoggedIn, campgrounds.renderNewForm)

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthor, upload.array('image'), validateCampground, catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm))



module.exports = router;


// start of CRUD process.  
/** 
 *? req = you are requesting from data from the server and then 
 */

// router.get('/', catchAsync(campgrounds.index))


/** 

 *? this is where we will new look to create a new campground entry in our website
 *? we oringally have this below campgrounds ID, but if you put it below computer will freeze, hence you need to put it above the ID
 */
// router.get('/new', isLoggedIn, campgrounds.renderNewForm)



/** 
 *? this is where the form is submitted to aka the post
 *? so what's going to happen is there will be an error thrown in here from monggose, we are going to catch it 
 *? catch with async and pass it to next.  the whole existnece of this function is just to do that
*/
// router.post('/', isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground))


/** 
 *? this is going to help us setup/show our details page for the campgrouund
 *? we need the id here to look up for our corresponding database
*/
// router.get('/:id', catchAsync(campgrounds.showCampground))

/** 
 *? this here is  the route for the form, that serves the formtated get route
*/

// router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm))



/** 
 *? setitin up put route as an example or a put rout rather or delte or patch for campgrounds
 *? this section is related to edit.ejs
*/

// router.put('/:id', validateCampground, catchAsync(campgrounds.updateCampground))


/** 
 *? this is where we dlete 
*/
// router.delete('/:id', isLoggedIn, isAuthor, catchAsync(campgrounds.delete))

// module.exports=router