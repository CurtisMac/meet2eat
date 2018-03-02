const express = require('express')
const createRouter = express.Router()

createRouter.get('/create', (req, res) => {
    res.send('create a meetup!')
})

module.exports = createRouter