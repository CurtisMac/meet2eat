const express = require('express')
const loginRouter = express.Router()
const userDb = require('../user-data')

//To use, post key 'username' with value
//our usernames are our first names, all lowercase
loginRouter.post('/login', (req, res) => {
    let {username}  = req.body
    let userData = userDb.find((obj) => {
        return obj.username===username
    })
    res.send(userData.info)
})

module.exports = loginRouter