const express = require('express')
const loginRouter = express.Router()
const userDb = require('../user-data')
const bodyParser = require('body-parser')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
loginRouter.use(bodyParser.json())

// loginRouter.get('/login/:username', (req, res) => {
//     let {username} = req.params
//     let userData = userDb.filter((obj)=>{
//         return obj.username===username
//     })
//     res.json(userData)
// })

loginRouter.post('/login', (req, res) => {
    let {username}  = req.body

    let userData = userDb.find((obj) => {
        return obj.username===username
    })
    
    res.send(userData.info)
})


module.exports = loginRouter