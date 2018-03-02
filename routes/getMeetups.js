const express = require ('express')
const getMeetupsRouter = express.Router()
const meetups = require('../meetup-data')

getMeetupsRouter.post('/meetups', (req, res) => {
  let {username} = req.body
  res.send(meetups) 
})

module.exports = getMeetupsRouter