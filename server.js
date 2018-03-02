const express = require('express')
const app = express()
const port = process.argv[2] || 8080
const bodyParser = require('body-parser')
const router = require('./routes/router')
const loginRouter = require('./routes/login')
const signupRouter = require('./routes/signup')
const joinRouter = require('./routes/joinMeet')
const createRouter = require('./routes/createMeet')
const restaurant = require('./functions/restaurantAPI')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    next();
  });
  
app.use('/', router)
app.use('/', loginRouter)
app.use('/', signupRouter)
app.use('/', joinRouter)
app.use('/', createRouter)

// app.get('/restaurants', (req, res) => {
//     restaurant((response) => {
//         res.json(response)
//     })
// })

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`)
})