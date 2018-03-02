const express = require('express')
const createRouter = express.Router()
const userDb = require('../user-data')
const getRestaurants = require('../functions/restaurantAPI')

createRouter.post('/create', (req, res) => {
    let {username} = req.body
    let userData = userDb.find((obj) => {
        //Getting random whitespace, hacked to get it working, to be fixed in the future
        return obj.username.replace(/\s/g, '') === username.replace(/\s/g, '')
    })
    let lat = userData.info.currentLocation.lat
    let long = userData.info.currentLocation.long
    getRestaurants(lat, long, (restaurantData) => {
        res.json(restaurantData)
    })
})

module.exports = createRouter 