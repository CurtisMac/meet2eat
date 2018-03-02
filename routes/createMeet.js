const express = require('express')
const createRouter = express.Router()
const userDb = require('../user-data')
const bodyParser = require('body-parser')
createRouter.use(bodyParser.urlencoded({ extended: false }))

createRouter.use(bodyParser.json())

createRouter.get('/create', (req, res) => {
    res.send('create a meetup!')
})

createRouter.post('/create', (req, res, body) => {
    let { id } = req.body
    let test = userDb.find((obj) => {
        return obj.info.id === id
    })
    console.log(test.info)
    res.json(test.info)
})

// let data = {
//     restaurant: this.state.pickedResto,
//     start: this.state.StarTime,
//     end: this.state.EndTime,
//     createdby: this.state.CreatedBy
// }

//    axios.post(this.apiCreat,data).then((res)=>{

//    })



module.exports = createRouter