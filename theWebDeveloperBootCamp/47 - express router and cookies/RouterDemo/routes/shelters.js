const express = require('express');
// this here is the brand new thing
// it needs to be included to make this thing work
const router = express.Router();

// if we didn't have this, we usually have to write /shelters
// but since we are using it on index.js w/ app.use('/shelters', shelterRoutes);
router.get('/', (req, res) => {
    res.send("ALL SHELTERS")
})
router.post('/', (req, res) => {
    res.send("CREATING SHELTER")
})
router.get('/:id', (req, res) => {
    res.send("VIEWING ONE SHELTER")
})
router.get('/:id/edit', (req, res) => {
    res.send("EDITING ONE SHELTER")
})

module.exports = router;