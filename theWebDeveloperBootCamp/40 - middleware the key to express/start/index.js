const express = require('express')
const app = express()
const morgan = require('morgan')

// reember to run middleware, we need to have the .use keyword
// // whatever you put into app.sue, intiatially will get be hijacked and will override anythhing below
// app.use(
//     morgan('common')
// )

// next will eventually route us to our next middleware
// what has happned here is that we stup a function that runs on every single request

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS!!")
    next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send("YOU NEED A PASSWORD!")
}



app.get('/dogs', (req,res)=> {
    console.log(`request date: ${req.requestTime}` )
    res.send('Home Page!')
})

app.get('/dogs', (req,res)=> {
    res.send('Woof Woof!')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone')
})

// this will run only if we never sent back anything before, if we never ended the cycle
// by matching any of the get requests above
app.use((req, res) => {
    // res. status allows us to change the status code to be for not found
    res.status(404).send('NOT FOUND!')
})


app.listen(3000, () => {
    console.log('The app is running on localhost:3000')
})