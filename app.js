const aboutMe = {
    name: {
        first: 'Ryan',
        last: 'Flitcroft',
        pronouns: 'he/him'
    },
    birthday: {
        month: 'April',
        day: 3,
        zodiac: 'Aries'
    },
    location: {
        state: 'Oregon',
        city: 'Portland',
        quadrant: 'SE'
    },
    diet: 'vegan',
    lgbtq: true,
    hobbies: ['photography', 'bike rides', 'roller skating', 'houseplants', 'hiking', 'exploring', 'coding'],
    partner: {
        name: 'Nic',
        dtr: 'husband',
        years: 10
    },
    pets: [ {
        name: 'Lissie',
        type: 'dog',
        breed: 'Chi-weenie',
        cute: true
    },
    {
        name: 'Millie',
        type: 'dog',
        breed: 'Heeler/Aussie',
        cute: true
    },
    {
        name: 'Kurt',
        type: 'goldfish',
        hungry: true
    } ]
}; 

console.log(aboutMe.name.first)
console.log(aboutMe.name.pronouns)
console.log(aboutMe.birthday.month + ' ' + aboutMe.birthday.day + 'rd')
console.log(aboutMe.birthday.zodiac)
console.log(aboutMe.location.quadrant + ' ' + aboutMe.location.city)
console.log(aboutMe.diet)

if (aboutMe.lgbtq === true) {
    console.log('gay')
}

for (let i = 0; i < aboutMe.hobbies.length; i++) {
    console.log(aboutMe.hobbies[i])
}

console.log(aboutMe.partner.dtr + aboutMe.partner.name)
if (aboutMe.pets[0].type === 'dog' && aboutMe.pets[1].type === 'dog') {
    console.log((aboutMe.pets.length - 1) + ' ' + aboutMe.pets[0].type + 's')
    if (aboutMe.pets[2].type === 'goldfish') {
        console.log((aboutMe.pets.length - 2) + ' ' + aboutMe.pets[2].type)
    }
}