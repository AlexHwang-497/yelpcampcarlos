module.exports.isLoggedIn = (req,res,next) => {
    // this help us determine if the user is logged in
    // console.log('REQ.USER...',req.user)
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl
        req.flash('error','you must be signed in first!')
        return res.redirect('/login')
    }
    next()
}