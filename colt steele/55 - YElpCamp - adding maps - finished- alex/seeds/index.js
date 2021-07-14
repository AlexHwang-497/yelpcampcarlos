const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '60e3c0c05f0d3b4d0c0857dc',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            // image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
            geometry: {
                type: "Point",
                coordinates: [-113.1331, 47.0202]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dfrz8zuzh/image/upload/v1625694390/YelpCamp/ruelrzjow2tqw5nat8fg.jpg',
                    filename: 'YelpCamp/ruelrzjow2tqw5nat8fg'
                  },
                  {
                    url: 'https://res.cloudinary.com/dfrz8zuzh/image/upload/v1625694390/YelpCamp/jvu7xenrww7jyixmsthk.jpg',
                    filename: 'YelpCamp/jvu7xenrww7jyixmsthk'
                  },
                  {
                    url: 'https://res.cloudinary.com/dfrz8zuzh/image/upload/v1625694391/YelpCamp/g1eqibku6rmvtba6kz8z.jpg',
                    filename: 'YelpCamp/g1eqibku6rmvtba6kz8z'
                  }
              
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})