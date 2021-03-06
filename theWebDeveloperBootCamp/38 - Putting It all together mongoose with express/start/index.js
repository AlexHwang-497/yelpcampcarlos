const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })



app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// app .get('/dog',(req,res)=>{
//     res.send('Woof!')

// })

app.get('/products', async (req, res)=>{

    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/show', { product })
})

app.get('/products/new', (req, res) => {
    res.render('products/new',{categories})
})


app.listen(3000, ()=> {
    console.log('App is lisetning on port 3000!')
})
