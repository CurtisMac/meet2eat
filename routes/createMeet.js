const express = require('express')
const createRouter = express.Router()

createRouter.get('/create', (req, res) => {
    res.send('create a meetup!')
})

// app.get('/create', (req, res) => {
//     let { username } = req.params
//     console.log(username)
//     res.send(username)
// })

// let data = {
//     restaurant: this.state.pickedResto,
//     start: this.state.StarTime,
//     end: this.state.EndTime,
//     createdby: this.state.CreatedBy
// }

//    axios.post(this.apiCreat,data).then((res)=>{

//    })



module.exports = createRouter