const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users');

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register));

router.route('/login')
    .get(users.renderLogin)
    // this is what colt posted.  it didnt' work because of users.login
    //     .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)

router.get('/logout', users.logout)

module.exports = router;


// router.get('/register', users.renderRegister)

// this is helping us creating the registering of users
// this is so we can submit our new users
// we are just making users here, we are not loggin them in
// router.post('/register', catchAsync(users.register))

// this is helping us create the login page
// router.get('/login', users.renderLogin)


// router.post('/login', passport.authenticate('local', {failureFlash:true, failureRedirect: '/login'}),users.userLogin)

// router.get('/logout', users.logout)

// module.exports = router