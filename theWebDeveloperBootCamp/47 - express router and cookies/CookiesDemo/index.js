const express = require('express');
const app = express();
// this helps us parse our cookies
const cookieParser = require('cookie-parser');
// this string is going to be used by cookie parser to sign my cookies if want them to be signed
// and then to verify that things still have not been charged or tampered with once we get those signed
app.use(cookieParser('thisismysecret'));

// this is just gettin a users name
app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies;
    res.send(`Hey there, ${name}`)
})
// we are going to give user    
app.get('/setname', (req, res) => {
    res.cookie('name', 'henrietta');
    res.cookie('animal', 'harlequin shrimp')
    res.send('OK SENT YOU A COOKIE!!!')
})
// this sends our signed cookies
app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send('OK SIGNED YOUR FRUIT COOKIE!')
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})

app.listen(3000, () => {
    console.log("SERVING!")
})