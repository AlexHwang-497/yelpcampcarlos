const express = require('express')
const path = require('path')
// we are connecting mongooze to our app
const mongoose = require('mongoose')
// this will start up the ejm - mate; ejs-mate helps you build a template of ejs, so you don't have to keep redoing it
const ejsMate = require('ejs-mate');
// this will start up joi
const Joi = require('joi')
const {campgroundSchema, reviewSchema} = require('./schemas.js')
// this will start up the catchAsync.js page
const catchAsync = require('./utils/catchAsync')
// this will start up the expressError.js page
const ExpressError = require('./utils/ExpressError')
// we are requiring method overrride
const methodOverride = require('method-override')
// we are requiring our model by creating this variable
const Campground = require('./models/camground')
const { execArgv } = require('process')
// intiates the review model/schema
const Review = require('./models/review');


// the logic here saysuse our local development database or if this is in production, use the production database
mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    // we are passing in our options here
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology:true
})

const db = mongoose.connection;
// logic check to see if we have an error in our database
db.on('error', console.error.bind(console,'connection error:'))
// fi successfully opened, we print out database connected
db.once('open', ()=> {
    console.log('Database connected')
})


const app = express()
//  we are initating middlewae/ settuing up ejs-mate
// template engine - allows you to use static tempalte files in your application
app.engine('ejs', ejsMate)

// intiating middleware/settin up ejs
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))
// we do this here for post, to parse thorugh the data so it will show up in the page
app.use(express.urlencoded({extended:true}))
// we need to use method overroide
app.use(methodOverride('_method'))


const validateCampground = (req, res, next) =>{
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

app.get('/', (req, res)=> {
    // res.send('Hello From Yelp Camp!!')
    res.render('home')
})


// start of CRUD process.  
// req = you are requesting from data from the server and then 

app.get('/campgrounds', async (req, res)=> {
    // decalre our variable
    const campgrounds = await Campground.find({})
    // we will then take our varialbe and pass it through our tempalte
    res.render('campgrounds/index', {campgrounds})

})

// this is where we will new look to create a new campground entry in our website
// we oringally have this below campgrounds ID, but if you put it below computer will freeze, hence you need to put it above the ID
app.get('/campgrounds/new', (req,res)=> {
    // this is where we will render our new form
    // ***remember everytime we have to create a file in EJS/campgrounds folder to make this work***
    res.render('campgrounds/new')
})

// this is where the form is submitted to aka the post
// so what's going to happen is there will be an error thrown in here from monggose, we are going to catch it 
// catch with async and pass it to next.  the whole existnece of this function is just to do that

app.post('/campgrounds', validateCampground, catchAsync(async(req, res, next)=> {
    // ///////we originally had the try/catch statment that is used with app.use((err,req,res,next)=>{ res.send('Oh Boy!!!, something went wrong')
    // ///////because we have catchAsync.js, we no longer need the try and catch statment
    ///////// in addition we need to the wrap catchasync around async


    // if this doesnt exist, we  throw the express error here because we are insdie the async function
    // and you throw it then our catch asyncy is going to catch the error and hnd it off to next which goes down to app.use...

    // ///////we don't need this anymore because we are using JOI
    // *******if(!req.body.campground) throw new ExpressError('invalid campground data', 400)///////////////

    // this is going to validate our data becore we even attempt to save it with mongoose
    // we just pass joi the differnt things we are looking for
  
    // we need to take request up body of campground  and route and submit/create a new campground
    // this is our new model
    const campground = new Campground(req.body.campground)
    await campground.save()
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
}))

// this is going to help us setup/show our details page for the campgrouund
// we need the id here to look up for our corresponding database
app.get('/campgrounds/:id', catchAsync(async(req, res)=>{
    const campground = await Campground.findById(req.params.id).populate('reviews')
    console.log(campground)
    // this will pop up when we put down a fake id
    res.render('campgrounds/show', {campground})
}))

// this here is  the route for the form, that serves the formtated get route
app.get('/campgrounds/:id/edit', catchAsync(async(req, res)=>{
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/edit', {campground})
}))

// setitin up put route as an example or a put rout rather or delte or patch for campgrounds
// this section is related to edit.ejs
app.put('/campgrounds/:id', validateCampground, catchAsync(async(req, res)=>{
    // this gives us the ID
    const { id } = req.params;
    // the second argument is the second query to update, we take whatever is in req.body.campground w/ a spread operator
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    res.redirect(`/campgrounds/${campground._id}`)
    
}))

// this is where we dlete 
app.delete('/campgrounds/:id', async(req, res)=>{
    const {id} = req.params;
    await Campground.findByIdAndDelete(id)
    res.redirect('/campgrounds')

})
// this is the code that we write to post new reviews
app.post('/campgrounds/:id/reviews', validateReview,catchAsync(async(req,res)=>{
    // res.send('you made it!!')
    const campground = await Campground.findById(req.params.id)
    const review = new Review(req.body.review)
    campground.reviews.push(review)
    await review.save()
    await campground.save()
    res.redirect(`/campgrounds/${campground._id}`)

}))

// this is the code of where we can delete review entries
// what we are tyring to do here is delete a specific ID#
app.delete('/campgrounds/:id/reviews/:reviewId', catchAsync(async(req,res)=>{
    const {id, reviewId} = req.params;
    await Campground.findByIdAndUpdate(id,{$pull:{reviews: reviewId}})
    await Review.findByIdAndDelete(reviewId)
    res.redirect(`/campgrounds/${id}`)
    
}))



// this will send this error to all pages that don't have specific error to them
app.all('*',(req,res,next)=>{
    // res.send("404!!!")
    next(new ExpressError('Page not Found!!', 404))
})

// setting up error handling on our input sheet for example on price when you put down letters instead of numbers
app.use((err, req, res, next)=>{  // res.send('Oh Boy!!!, something went wrong')
    // we are not goint ot hit this because we are not acutally handling asynch erors
    // we will send a try statment to app.post /campgrounds
    // if catch async wasn't working, we wouldn't see this message as well


    // ////what is happening below is when the page doesnt exist... 'Page not found!!' from above will be printed in the browser 
    // ////in the inspect window under console you will see a 404 status
    // deconstruct from error
    const {statusCode = 500} = err;
    //  what is . status()
    // this will eventaully send error.ejs to the ser
    // we will pass the entire error aka err into our template
    if(!err.message) err.message = 'Oh no, something went wrong!!!'
    res.status(statusCode).render('error', {err})

})

app.listen(3000, () => {
    console.log('Serving on port 3000')
})




// ////we orginally did this in our beginning videos.  we took this out when we started our CRUD process
// app.get('/makecampground', async (req, res)=> {
//     // we are making a new 'campground' in this file
//     // and we will pass is 
//     const camp = new Campground({title: 'My Backyard', description: 'cheap camping!'})
//     await camp.save()
//     // if the following above works then we are going to do the following
//     res.send(camp)
// })








