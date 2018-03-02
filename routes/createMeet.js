const express = require('express')
const createRouter = express.Router()

createRouter.get('/create', (req, res) => {
    res.send('create a meetup!')
})

// app.get('/create', (req, res) => {
//     let { username } = req.params
//     console.log(username)
//     res.send(username)
// })

module.exports = createRouter