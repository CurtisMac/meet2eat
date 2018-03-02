const express = require('express')
const createRouter = express.Router()
const userDb = require('../user-data')
const getRestaurants = require('../functions/restaurantAPI')
const meetups = require('../meetup-data')

createRouter.post('/create', (req, res) => {
    let {restaurant, address, start, end, username, id} = req.body
    // let userData = userDb.find((obj) => {
    //     //Getting random whitespace, hacked to get it working, to be fixed in the future
    //     return obj.username.replace(/\s/g, '') === username.replace(/\s/g, '')
    // })
    res.send('success')
})

module.exports = createRouter 