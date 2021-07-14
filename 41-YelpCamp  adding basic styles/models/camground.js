const mongoose = require('mongoose')
const Schema = mongoose.Schema

// we are making our schema
const CamproundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String
})

// we will then export the schema at the end
module.exports = mongoose.model('Campground', CamproundSchema)