// we are doing this here because we want to protect ourselves
// from middleware

// this is really useful feature because often we have middleware that we want to sort of bulk apply to 
// one chunk of roots or part of our application and not the entire app
const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        return next();
    }
    return res.send("SORRY NOT AN ADMIN!")
})

router.get('/topsecret', (req, res) => {
    res.send('THIS IS TOP SECRET')
})
router.get('/deleteeverything', (req, res) => {
    res.send('OK DELETED IT ALL!')
})

module.exports = router;
