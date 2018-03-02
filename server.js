const express = require('express')
const app = express()
const port = process.argv[2] || 8080
const router = require('./routes/router')
const loginRouter = require('./routes/login')
const signupRouter = require('./routes/signup')
const joinRouter = require('./routes/joinMeet')
const createRouter = require('./routes/createMeet')
const restaurant = require('./functions/restaurantAPI')


app.use('/', router)
app.use('/', loginRouter)
app.use('/', signupRouter)
app.use('/', joinRouter)
app.use('/', createRouter)

// app.get('/login/:username', (req, res)=>{
//     let {username} = req.params
//     let userData = 
//     console.log(username)
//     res.json(username)
// })

// app.get('/join', (req, res) => {
//     let { username } = req.params
//     console.log(username)
//     //will receive picked time and picked food
//     res.send(username)
// })

// app.get('/create', (req, res) => {
//     let { username } = req.params
//     console.log(username)
//     res.send(username)
// })

// app.get('/restaurants', (req, res) => {
//     restaurant((response) => {
//         res.json(response)
//     })
// })

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`)
})