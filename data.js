const faker = require('faker');
sex = () => {
    let x = faker.random.boolean()
    if (x === true) {
        return "female"
    } else {
        return "male"
    }
}
age = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const userDb = [
    {
        username: faker.internet.userName(),
        password: faker.internet.password(),
    },
    {
        info: {
            photo: faker.image.avatar(),
            id: faker.random.number(),
            name: faker.name.findName(),
            age: age(18, 65),
            sex: sex(),
            interests: [
                {}
            ],
            bio: faker.lorem.paragraph(),
            currentLocation: {
                lat: 0,
                long: 0,
            }
        }
    }
]
console.log(userDb[0].username)
console.log(userDb[0].password)
console.log(userDb[1].info.id)
console.log(userDb[1].info.name)
console.log(userDb[1].info.bio)
console.log(userDb[1].info.sex)
console.log(userDb[1].info.age)