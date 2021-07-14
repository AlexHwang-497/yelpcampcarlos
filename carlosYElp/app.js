if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

console.log(process.env.SECRET)
// ///////// go thorgh with carlos on all these technologies and talk to him in regads to what it dow
/**
 * ! go through and discuss diffent technologies, frameworks and libraries with carlos 
 */
const express = require('express');
const path = require('path');
// connecting mongoose to our app
const mongoose = require('mongoose');
// this will start up the ejm - mate; ejs-mate helps you build a template of ejs, so you don't have to keep redoing it
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const ExpressError = require('./utils/ExpressError');
// we are using method override - - - still do't get what this is for?
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');


const userRoutes = require('./routes/users');
const campgroundRoutes = require('./routes/campgrounds');
const reviewRoutes = require('./routes/reviews');


/**
 * ! what was the point of this?  still don't get why we had to do this
 * ? the logic here saysuse our local development database or if this is in production, use the production database
 */
mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    // we are passing in our options here
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// we should see this in the gitbash
const db = mongoose.connection;
// logic check to see if we have an error in our database
db.on("error", console.error.bind(console, "connection error:"));
// if successfully opened, we print out database connected
db.once("open", () => {
    console.log("Database connected");
});

const app = express();
//  we are initating middlewae/ settuing up ejs-mate
// template engine - allows you to use static tempalte files in your application
app.engine('ejs', ejsMate)
/**
 * ! discuss what is the point of set, use, and get?
 * /
 */
// intiating middleware/settin up ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
// we do this here for post, to parse thorugh the data so it will show up in the page
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
// this helps us pop up an alert from the public driectory
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')))

// we are creatign our cookies in this section
const sessionConfig = {
    secret: 'thisshouldbeabettersecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig))
// intiate the flash.  we use this for example, when you cretae a new entry the first time,
// it will tell you that you have successfully created a new entry
// once you refresh it will dissapear
app.use(flash());

//we are intializing our passports for authentiacation 
// we also need to make sure that app.use(session()) is always above passport to make it work
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
// this is in regards to how we store a user in a session
// serialization refers to how we get data, how do we store a suers in thessession
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// this is related to the flash middleware above
app.use((req, res, next) => {
    console.log(req.session)
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

// we need these to utilize our path/routes files
app.use('/', userRoutes);
app.use('/campgrounds', campgroundRoutes)
app.use('/campgrounds/:id/reviews', reviewRoutes)


app.get('/', (req, res) => {
    res.render('home')
});

// this will send this error to all pages that don't have specific error to them
app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

// setting up error handling on our input sheet for example on price when you put down letters instead of numbers
app.use((err, req, res, next) => {
    // what is happening below is when the page doesnt exist... 'Page not found!!' from above will be printed in the browser 
    // in the inspect window under console you will see a 404 status
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
})


