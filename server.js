const express = require('express')
const app = express()
const port = process.argv[2] || 8080
const axios = require('axios')
const restaurant = require('./functions/restaurantAPI')

app.get('/', (req, res) => {
    restaurant((response) => {
        res.json(response)
    })
})

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`)
})