const axios = require('axios')

module.exports = function (callback) {
    axios({
        method: 'get',
        url: 'https://developers.zomato.com/api/v2.1/geocode?lat=49.285049&lon=-123.114723',
        headers: { 'user-key': 'e8bb510b6bf9e4d7930830a4c9c3ba5e' }
    })
        .then(function (response) {
            console.log(response.data.nearby_restaurants)
            callback(response.data)
        })
        .catch(function (err) {
            console.log(err)
        })
}

