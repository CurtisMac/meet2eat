const express = require('express')
const loginRouter = express.Router()

loginRouter.get('/login/:username', (req, res) => {
    let {username} = req.params
    res.json(username)
})


// app.get('/login/:username', (req, res)=>{
//     let {username} = req.params
//     let userData = 
//     console.log(username)
//     res.json(username)
// })
module.exports = loginRouter