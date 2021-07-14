// we will be this file on its own sepeartely from our node 
// at any time we want to seed our database, which is not really often

// we are connecting mongooze to our app
const mongoose = require('mongoose')
// we are importing our cities data
const cities = require('./cities')
// we are destructuring and importing both of our descriptors from seeed helpers
const {places, descriptors} = require('./seedHelpers')
// we are requiring our model by creating this variable
const Campground = require('../models/camground')

// the logic here saysuse our local development database or if this is in production, use the production database
mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    // we are passing in our options here
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology:true
})

const db = mongoose.connection;
// logic check to see if we have an error in our database
db.on('error', console.error.bind(console,'connection error:'))
// fi successfully opened, we print out database connected
db.once('open', ()=> {
    console.log('Database connected')
})


const sample = (array) =>  array[Math.floor(Math.random() * array.length)]

// we are doing this to remove everything from our database
const seedDb = async()=> {
    // first thing we will do is delete everything
    await Campground.deleteMany({})
    // this is utulized just to make sure everything is working
    //// const c = new Campground({title:'purple field'})
    //// await c.save()

    for(let i=0; i<50; i++){
        const random1000 = Math.floor(Math.random() * 1000)
        const camp = new Campground({
            location:`${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`
        })
        await camp.save()
    }
}

seedDb().then(()=> {
    mongoose.connection.close()
})