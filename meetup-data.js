
const meetups = [
    {
        restaurant: 'A Random Pizza Place',
        address: '001 Granville St.',
        start: '12:30',
        end: '2:00',
        username: 'curtis',
        id: 'm180302_1'
    },
    {
        restaurant: 'A Sushi Place',
        address: '002 Granville St.',
        start: '12:00',
        end: '1:30',
        username: 'sandra',
        id: 'm180303_2'
    },
    {
        restaurant: 'Ramen Restaurant',
        address: '003 Robson St.',
        start: '1:00',
        end: '2:00',
        username: 'eduardo',
        id: 'm180304_3'
    }
]

addMeetup = (restaurant, address, start, end, username, id) => {
  return meetups.push(
      {   restaurant,
          address,
          start,
          end,
          username,
          id
      }
  )
}
 

module.exports = {addMeetup, meetups}

