const faker = require('faker');

const userDb = []

sex = () => {
    let x = faker.random.boolean()
    x === true ? "female" : "male"
}
age = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 3; i++) {
    userDb.push({
        
            username: faker.internet.userName(),
            password: faker.internet.password(),
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
    );
}

console.log(userDb);
console.log(userDb[0].info.name)