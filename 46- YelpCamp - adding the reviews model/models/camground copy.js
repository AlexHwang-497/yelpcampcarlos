const mongoose = require('mongoose')
const { campgroundSchema } = require('../schemas')
const Schema = mongoose.Schema

// we are making our schema
const CamproundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String,
    // embedded 
    reviews: [
        {
            type:Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
})

// mongoose middleware
// CampgroundSchema.post('findOneAndDelete', async function(){
//     console.log('deleted!!!!')
// }) 

// we will then export the schema at the end
module.exports = mongoose.model('Campground', CamproundSchema)