const express = require('express')
const createRouter = express.Router()
const userDb = require('../user-data')
const getRestaurants = require('../functions/restaurantAPI')
const meetups = require('../meetup-data')

createRouter.post('/create', (req, res) => {
    let {restaurant, address, start, end, username, id} = req.body
    meetups.addMeetup(restaurant, address, start, end, username, id)
    res.send(meetups)
})

module.exports = createRouter 
