const faker = require('faker');

const userDb = [
    {
        username: 'sandra',
        password: 'abc123',
        info: {
            photo: "/profile_photo.jpeg",
            id: 0001,
            name: 'Sandra',
            age: '',
            sex: 'female',
            interests: [
                {}
            ],
            bio: faker.lorem.paragraph(),
            currentLocation: {
                lat: 49.2850486,
                long: -123.1169118,
            }
        }
    },
    {
        username: 'eduardo',
        password: 'abc123',
        info: {
            photo: "",
            id: 0002,
            name: 'Ed Silva',
            age: '',
            sex: 'male',
            interests: [
                {}
            ],
            bio: faker.lorem.paragraph(),
            currentLocation: {
                lat: 49.2850486,
                long: -123.1169118,
            }
        }
    },
    {
        username: 'curtis',
        password: 'abc123',
        info: {
            photo: "",
            id: 0003,
            name: 'Curtis Mac',
            age: '',
            sex: 'male',
            interests: [
                {}
            ],
            bio: faker.lorem.paragraph(),
            currentLocation: {
                lat: 49.2850486,
                long: -123.1169118,
            }
        }
    },
    {
        username: 'andrew',
        password: 'abc123',
        info: {
            photo: "",
            id: 0004,
            name: 'Andrew Sordier',
            age: '',
            sex: 'male',
            interests: [
                {}
            ],
            bio: faker.lorem.paragraph(),
            currentLocation: {
                lat: 49.2850486,
                long: -123.1169118,
            }
        }
    }
]


sex = () => {
    let x = faker.random.boolean()
    return x === true ? "female" : "male";

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
    });
}

// const updateDB = (data)=>{
//     console.log(data)
// }

module.exports = userDb


