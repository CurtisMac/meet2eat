const express = require('express')
const loginRouter = express.Router()
const userDb = require('../user-data')

loginRouter.get('/login/:username', (req, res) => {
    let {username} = req.params
    let userData = userDb.filter((obj)=>{
        return obj.username===username
    })
    res.json(userData)
})

module.exports = loginRouter