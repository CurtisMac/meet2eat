const express = require('express')
const router = express.Router()
const updateDB = require('../user-data')
const getRestaurants = require('../functions/restaurantAPI')

const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


router.post('/', (req, res) => {
    let {lat, long} = req.body
    // updateDB(username)
    getRestaurants(lat, long, (restaurantData)=>{
        res.json(restaurantData)
    })
})

module.exports = router