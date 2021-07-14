const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

// we are defining are schema for the user
const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            street: String,
            city:String,
            state:String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema)

const makeUser = async() =>{
    const u = new User ({
        first:'Harry',
        last: 'Potts',

    })
    u.address.push({
        street: '123 Sesame St',
        city:'New York',
        state:'NY',
        country: 'USA'
    })
    const res = u.save()
    console.log(res)
}

const addAddress = async(id) =>{
    const user =await User.findById(id)
    user.addresses.push(
        {
            street: '99 3rd St',
            city:'New York',
            state:'NY',
            country: 'USA'
        }
    )
    const res = await user.save()
    console.log(res)
}
addAddress('60dce5fd6deb7a3eb4c759f5')
makeUser()