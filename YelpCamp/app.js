// this is for our image uploading to the cloud.  we need to tdo this to hide our personal info
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

console.log(process.env.SECRET)
console.log(process.env.API_KEY)

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
const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./models/user');




// we are requiring our model by creating this variable
const Campground = require('./models/camground')
const { execArgv } = require('process')
// intiates the review model/schema
const Review = require('./models/review');
// istart express session
const session = require('express-session')
const flash = require('connect-flash')
// we use these to start up our routes/paths
const userRoutes = require('./routes/users')
const campgrounds = require('./routes/campgrounds')
const reviews = require('./routes/reviews')





// the logic here saysuse our local development database or if this is in production, use the production database
mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    // we are passing in our options here
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology:true,
    useFindandModify: false
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
// this helps us pop up an alert from the public driectory
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname,'public')))


// we are creatign our cookies in this section
const sessionConfig = {
    secret:'thisshouldbeabettersecret!',
    resave: false,
    saveUnitialized: true,
    cookie:{
        httpOnly:true,
        expires: Date.now() + 1000*60*60*24*7,
        maxAge: 1000*60*60*24*7


    }
}
app.use(session(sessionConfig))
// intiate the flash.  we use this for example, when you cretae a new entry the first time,
// it will tell you that you have successfully created a new entry
// once you refresh it will dissapear
app.use(flash())

//we are intializing our passports for authentiacation 
// we also need to make sure that app.use(session()) is always above passport to make it work
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
// this is in regards to how we store a user in a session
// serialization refers to how we get data, how do we store a suers in thessession
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())



// this is related to the flahs middleware above
app.use((req,res,next)=>{
    console.log(req.session)
    res.locals.currentUser = req.user
    res.locals.success=req.flash('success')
    res.locals.error=req.flash('error')
    next()
})

// this is the route of how we will register our users for authentication
app.get('/fakeUser', async(req,res)=> {
    const user = new User({email: 'colt@gmail.com',username:'colt'})
    // we call the resiter method, which is provided as a helper thanks to our passport
    // this will also checks if username is unique.  this is utilized w/ local mongoose plug in
    const newUser = await User.register(user,'chicken')
    res.send(newUser)

})



// we need these to utilize our path/routes files
app.use('/', userRoutes)
app.use('/campgrounds',campgrounds)
app.use('/campgrounds/:id/reviews',reviews)


app.get('/', (req, res)=> {
    // res.send('Hello From Yelp Camp!!')
    res.render('home')
})






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








