const express = require('express')
const path = require('path')
// we are connecting mongooze to our app
const mongoose = require('mongoose')
// this will start up the ejm - mate; ejs-mate helps you build a template of ejs, so you don't have to keep redoing it
const ejsMate = require('ejs-mate');
// we are requiring method overrride
const methodOverride = require('method-override')
// we are requiring our model by creating this variable
const Campground = require('./models/camground')
const { execArgv } = require('process')

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
app.post('/campgrounds', async(req, res)=> {
    // we need to take request up body of campground  and route and submit/create a new campground
    // this is our new model
    const campground = new Campground(req.body.campground)
    await campground.save()
    // we then redirect
    res.redirect(`/campgrounds/${campground._id}`)
})

// this is going to help us setup/show our details page for the campgrouund
// we need the id here to look up for our corresponding database
app.get('/campgrounds/:id', async(req, res)=>{
    const campground = await Campground.findById(req.params.id)
    // this will pop up when we put down a fake id
    res.render('campgrounds/show', {campground})
})

// this here is  the route for the form, that serves the formtated get route
app.get('/campgrounds/:id/edit', async(req, res)=>{
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/edit', {campground})
})

// setitin up put route as an example or a put rout rather or delte or patch for campgrounds
// this section is related to edit.ejs
app.put('/campgrounds/:id', async(req, res)=>{
    // this gives us the ID
    const { id } = req.params;
    // the second argument is the second query to update, we take whatever is in req.body.campground w/ a spread operator
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    res.redirect(`/campgrounds/${campground._id}`)
    
})

// this is where we dlete 
app.delete('/campgrounds/:id', async(req, res)=>{
    const {id} = req.params;
    await Campground.findByIdAndDelete(id)
    res.redirect('/campgrounds')

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