
const meetups = [
    {
        restaurant: 'A Random Pizza Place',
        address: '001 Granville St.',
        start: '12:30',
        end: '2:00',
        username: 0001,
        id: 'm180302_1'
    },
    {
        restaurant: 'A Sushi Place',
        address: '002 Granville St.',
        start: '12:00',
        end: '1:30',
        username: 0002,
        id: 'm180303_2'
    },
    {
        restaurant: 'Ramen Restaurant',
        address: '003 Robson St.',
        start: '1:00',
        end: '2:00',
        username: 0003,
        id: 'm180304_3'
    }
]

addMeetup = (restaurant, address, start, end, username, id) => {
    let newMeetup = {
        restaurant: restaurant,
        address: address,
        start: start,
        end: end,
        username: username,
        id: id
    }
    return meetups.concat(newMeetup)
}
console.log(addMeetup("test restaurante 1", "123 test", "12pm", '1pm', 'ed', '000'))



module.exports = {addMeetup, meetups}

