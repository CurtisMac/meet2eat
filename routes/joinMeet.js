const express = require('express')
const joinRouter = express.Router()

joinRouter.get('/join', (req, res) => {
    res.send('join a meetup')
})

// app.get('/join', (req, res) => {
//     let { username } = req.params
//     console.log(username)
//     //will receive picked time and picked food
//     res.send(username)
// })

module.exports = joinRouter