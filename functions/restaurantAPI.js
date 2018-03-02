const axios = require('axios')

getRestaurants = (lat, long, callback) => {
    // let lat = '49.285049'
    // let long ='-123.114723'
    axios({
        method: 'post',
        url: `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${long}`,
        headers: { 'user-key': 'e8bb510b6bf9e4d7930830a4c9c3ba5e' }
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
