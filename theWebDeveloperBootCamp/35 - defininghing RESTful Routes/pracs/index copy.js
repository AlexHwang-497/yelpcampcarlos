const express = require('express')
const app = express()
const path = require('path')
const {v4: uuid} = require('uuid')


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

const comments = [
    {   id:uuid(),
        username:'Todd',
        comment: 'lol that is so funny',    
    },
    {
        id:uuid(),
        username:'skyler',
        comment: 'fuck shit dawg',    
    },
    {
        id:uuid(),
        username:'Toddert',
        comment: 'stupid is waht stoupid does',    
    },
    {
        id:uuid(),
        username:'bla trash',
        comment: 'lol that is not so funny',    
    }
]


app.get('/comments', (req,res)=> {
    res.render('comments/index', {comments})
})

app.get('/comments/new', (req,res)=> {
    res.render('comments/new')
})

app.post('/comments',(req,res)=>{
    // console.log(req.body)
    const { username, comment } = req.body
    comments.push({username,comment, id:uuid()})
    // res.send('it Works!!!')
    res.redirect('/comments')
})

app.get('/comments/:id',(req,res)=>{
    const {id} = req.params
    const comment = comments.find(c=> c.id===id)
    res.render('comments/show',{comment})
    res.redirect('/comments')


})

app.patch('/comments/:id',(req,res)=> {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id);
        // //get new text from req.body
    const newCommentText = req.body.comment;
    // //update the comment with the data from req.body:
    foundComment.comment = newCommentText;
    // //redirect back to index (or wherever you want)
    res.redirect('/comments')
    // res.send('update something')

})


app.get('/tacos', (req,res)=> {
    res.send('Get /tacos response')
})

app.post('/tacos', (req, res)=>{
    const {meat, qty} = req.body;
    console.log(req.body)
    res.send(`Ok, here are your ${qty} ${meat} tacos`)
})


app.listen(3000, ()=> {
    console.log('on port 3000')
})