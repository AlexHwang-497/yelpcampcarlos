const User = require('../models/user')


// goes to user register form
module.exports.renderRegister = (req,res)=> {
    res.render('users/register')
}


module.exports.register = async(req, res, next)=>{
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
}

// this opens up the login page
module.exports.renderLogin = (req,res)=>{
    res.render('users/login')
}

// this allows our users to login
module.exports.userLogin = (req,res)=>{
    req.flash('success', 'welcome back!')
    const redirectUrl = req.session.returnTo || '/campgrounds'
    delete req.session.returnTo
    res.redirect(redirectUrl)
}


// this allows our users to logout
module.exports.logout = (req,res)=> {
    req.logout()
    req.flash('success','Goodbye!')
    res.redirect('/campgrounds')
}