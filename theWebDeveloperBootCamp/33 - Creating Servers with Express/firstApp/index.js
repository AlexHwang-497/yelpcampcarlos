const express = require('express')
const app = express()
// console.dir(app)


// app.use((req,res)=>{
//     console.log("WE GOT A NEW REQUEST!!!")
//     // console.dir(req)
//     // res.send("Hello, We got your request!!This is a response!!!")
//     // res.send({color:'red'})
// })
// app.get('*',(req,res)=>{
//     // console.log('CAT Request!!!!')
//     res.send("I don't know that route or path")
// })

app.get('/cats',(req,res)=>{
    // console.log('CAT Request!!!!')
    res.send('Meow!!')
})

app.post('/cats',(req,res)=>{
    // console.log('CAT Request!!!!')
    res.send('Post Request to /cats!!!! THis is differnet than a get request!!!')
})


app.get('/',(req,res)=>{
    // console.log('CAT Request!!!!')
    res.send('This is the home page!!!!!!!!!!!!!!!!!!')
})

app.get('/r/:subreddit:',(req,res)=>{
    const {subreddit} = req.params
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
    // res.send(`<h1>Viewieing the Post ID: ${postId} subreddit</h1>`)
})
app.get('/r/:subreddit/:postId',(req,res)=>{
    const {subreddit, postId} = req.params
    // res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
    res.send(`<h1>Viewieing the Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})


app.get('/search',(req,res)=>{
    const {q} = req.query
    res.send(`<h1>Search results for: ${q}</h1>`)
    
})


app.get('/dogs',(req,res)=>{
    // console.log('CAT Request!!!!')
    res.send('woof!!')
})

app.listen(8080,()=>{
    console.log('LISTENING ON PORT 8080!')
})