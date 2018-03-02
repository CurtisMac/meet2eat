const express = require('express')
const createRouter = express.Router()
const userDb = require('../user-data')
const getRestaurants = require('../functions/restaurantAPI')

createRouter.post('/create', (req, res) => {
    let {id} = req.body
    let userData = userDb.find((obj) => {
        return obj.username === 'curtis'
    })
    // let lat = userData.info.currentLocation.lat
    // let long = userData.info.currentLocation.long
    // getRestaurants(lat, long, (restaurantData) => {
    //     res.json(restaurantData)
    // })
    res.send(userData)
})

module.exports = createRouter 