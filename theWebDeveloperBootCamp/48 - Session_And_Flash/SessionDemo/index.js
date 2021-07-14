const express = require('express');
const app = express();
const session = require('express-session');

//  we create an option secret variable
const sessionOptions = { secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false }
app.use(session(sessionOptions));

// setup middleware at anytime on our requesst object we will now have a session propertly avialabe
app.get('/viewcount',(req,res)=>{
    // res.send('you have viewed this page x amount of times')
    if(req.session.count){
        req.session.count++
    } else {
        req.session.count=1
    }
    res.send(`you have viewed this page ${req.session.count} times`)
})

app.get('/register', (req, res) => {
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet')
})


app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Welcome back, ${username}`)
})


app.listen(3000, ()=> {
    console.log('listening on port 3000')
})