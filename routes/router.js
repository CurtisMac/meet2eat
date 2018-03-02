const express = require('express')
const router = express.Router()
const updateDB = require('../user-data')
const getRestaurants = require('../functions/restaurantAPI')
const apiData = require('../api.js')

router.post('/', (req, res) => {
    let {lat, long} = req.body
    getRestaurants(lat, long, (restaurantData)=>{
        res.json(apiData[0])
    })
})


module.exports = router