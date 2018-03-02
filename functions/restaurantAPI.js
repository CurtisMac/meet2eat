const axios = require('axios')
const api = require ('../keys.js')

getRestaurants = (lat, long, callback) => {
    axios({
        method: 'post',
        url: `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${long}`,
        headers: { 'user-key': api }
    })
        .then(function (response) {
            callback(response.data.nearby_restaurants)
        })
        .catch(function (err) {
            console.log(err)
        })
}

module.exports = getRestaurants 
