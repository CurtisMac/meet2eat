const express = require('express')
const loginRouter = express.Router()
const userDb = require('../user-data')

const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//To use, post key 'username' with value
//our usernames are our first names, all lowercase

loginRouter.post('/login', (req, res) => {
    let {username}  = req.body
    let userData = userDb.filter((obj) => {
        return obj.username===username
    })
    res.send(userData)
})


module.exports = loginRouter