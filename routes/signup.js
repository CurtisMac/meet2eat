const express = require('express')
const signupRouter = express.Router()

signupRouter.get('/signup', (req, res) => {
    res.send('here you can sign up')
})

module.exports = signupRouter