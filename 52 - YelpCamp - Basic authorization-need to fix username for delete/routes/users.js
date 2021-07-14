const express = require('express')
const router = express.Router()
const passport = require('passport')
const catchAsync = require('../utils/catchAsync')
const User = require('../models/user')


router.get('/register', (req,res)=> {
    res.render('users/register')
})
// this is helping us creating the registering of users
// this is so we can submit our new users
// we are just making users here, we are not loggin them in
router.post('/register', catchAsync(async(req, res, next)=>{
    // **we do this to check to see if the data is going through
    // res.send(req.body)
    try{
        const {email,username,password} = req.body;
        const user = new User({email,username})
        const registeredUser = await User.register(user,password)
        // this will keep our user logged in after they register the first time
        req.login(registeredUser,err=> {
            if(err) return next(err)
            req.flash('success','Welcome to Yelp Camp!!!')
            res.redirect('/campgrounds')
        })
    } catch(e){
        // this helps us figrue out if a user has already been created
        req.flash('error', e.message)
        res.redirect('register')
    }
    // console.log(registeredUser)
}))

// this is helping us create the login page
router.get('/login', (req,res)=>{
    res.render('users/login')
})
router.post('/login', passport.authenticate('local', {failureFlash:true, failureRedirect: '/login'}),(req,res)=>{
    req.flash('success', 'welcome back!')
    const redirectUrl = req.session.returnTo || '/campgrounds'
    delete req.session.returnTo
    res.redirect(redirectUrl)
})

router.get('/logout', (req,res)=> {
    req.logout()
    req.flash('success','Goodbye!')
    res.redirect('/campgrounds')
})

module.exports = router