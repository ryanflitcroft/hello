// Define Object aboutMe
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
    favoriteColor: ['#000', '#fff', '#d3d3d3'],
    hobbies: ['photography', 'bike rides', 'roller skating', 'houseplants', 'exploring', 'coding'],
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
    } ],
    occupations: [ {
        where: 'Starbucks',
        type: 'coffee shop',
        start: 2011,
        end: 2013
    },
    {
        where: 'Steam',
        type: 'bathhouse',
        start: 2013,
        end: 2017
    },
    {
        where: 'Stag',
        type: 'strip club',
        start: 2017,
        end: 2018
    },
    {
        where: 'Bishops',
        type: 'barbershop',
        start: 2018,
        end: 2021
    }]
}; 

// Grab DOM Elements by ID
//    -Input Button (#button)
//    -Span (#about-me)

const aboutSpan = document.getElementById('about-me');
const button = document.getElementById('button');


const myName = `I'm ${aboutMe.name.first}!`;
const myPronouns =  `My pronouns are ${aboutMe.name.pronouns}.`;
const myBirthday = `My birthday's on ${aboutMe.birthday.month} ${aboutMe.birthday.day}rd...`;
const mySign = `...my sign is ${aboutMe.birthday.zodiac}.`;
const myLocation = `I live in ${aboutMe.location.quadrant} ${aboutMe.location.city}.`;
const favColor = `My favorite colors are 
${aboutMe.favoriteColor[0]}, ${aboutMe.favoriteColor[1]}, and ${aboutMe.favoriteColor[2]}`;
const favColor2 = `(I know those aren't colors)`;
const myHobby0 = `Things I like: ${aboutMe.hobbies[0]}`;
const myHobby1 = `Things I like: ${aboutMe.hobbies[1]}`;
const myHobby2 = `Things I like: ${aboutMe.hobbies[2]}`;
const myHobby3 = `Things I like: ${aboutMe.hobbies[3]}`;
const myHobby4 = `Things I like: ${aboutMe.hobbies[4]}`;
const myHobby5 = `...and ${aboutMe.hobbies[5]}!!`;
const myPartner = `I have a ${aboutMe.partner.dtr}, named ${aboutMe.partner.name}.`;
const myPets = `We have 2 ${aboutMe.pets[0].type}s and a ${aboutMe.pets[2].type}...`;
const petNames = `(${aboutMe.pets[0].name}, ${aboutMe.pets[1].name}, and ${aboutMe.pets[2].name})`;
const beforeAlchemy = `Before Alchemy:`
const myOccupation1 = `I worked in a ${aboutMe.occupations[0].where} ${aboutMe.occupations[0].type}...`;
const myOccupation2 = `...a ${aboutMe.occupations[1].type} called ${aboutMe.occupations[1].where}...`;
const myOccupation3 = `...a ${aboutMe.occupations[2].type} called ${aboutMe.occupations[2].where}...`;
const mostRecent = `...and most recently...`
const myOccupation4 = `I worked at ${aboutMe.occupations[3].where} ${aboutMe.occupations[3].type}.`;
const arrayEnd = `< /  >`;


const spanArray = [myName, myPronouns, myBirthday, mySign, myLocation, favColor, favColor2, myHobby0, myHobby1, myHobby2, myHobby3, myHobby4, myHobby5, myPartner, myPets, petNames, beforeAlchemy, myOccupation1, myOccupation2, myOccupation3, mostRecent, myOccupation4, arrayEnd]

let i = 0;
button.addEventListener('click', () => {
    aboutSpan.textContent = spanArray[i % spanArray.length];
    i++; 

});
