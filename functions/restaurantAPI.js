const axios = require('axios')

getRestaurants = (lat, long, callback) => {
    axios({
        method: 'post',
        url: `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${long}`,
        headers: { 'user-key': 'fe09603b36f7542ee934666f0731649a' }
    })
        .then(function (response) {
            console.log(response.data.nearby_restaurants)
            callback(response.data.nearby_restaurants)
        })
        .catch(function (err) {
            console.log(err)
        })
}

module.exports = getRestaurants 
