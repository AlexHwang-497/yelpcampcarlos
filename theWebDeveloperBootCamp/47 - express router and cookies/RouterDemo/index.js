// we do this so we don't have to keep writing /shelter over and over again

const express = require('express');
const app = express();
// this connects the shelter.js to the document
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
// this is realted to admin, where we want to protect ourselves from middleware
const adminRoutes = require('./routes/admin')

// this tells us how to use shelters.  this prefix all of our routes
app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admin', adminRoutes)

app.listen(3000, () => {    console.log('Serving app on localhost:3000')
})
