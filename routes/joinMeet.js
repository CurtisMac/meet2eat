const express = require('express')
const joinRouter = express.Router()

joinRouter.get('/join', (req, res) => {
    res.send('join a meetup')
})

module.exports = joinRouter