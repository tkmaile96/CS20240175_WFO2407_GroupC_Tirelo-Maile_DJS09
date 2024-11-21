import { showReviewTotal, populateUser } from './utils'
let isOpen : boolean;

const reviews : {
    name : string;
    stars : number;
    loyaltyUser : boolean;
    date : string;
}[]= [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]


// User
const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[]
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

//Properties
const properties : {
    image : string;
    title: string;
    price: number;
    location : {
        firstLine: string;
        city : string;
        code : number;
        country: string;
    };
    contact : string;
    isAvailable: boolean;
}[] =[
    {
        image: '' ,
        title: 'Florida Home' ,
        price: 45,
        location: {
            firstLine: '123 Main St',
            city: 'Miami',
            code: 33101,
            country: 'USA'
        },
        contact: '123-456-7890',
        isAvailable: true
    },
    {
        image: '' ,
        title: 'Cape Flats' ,
        price: 35,
        location: {
            firstLine: '08 Madiba drive',
            city: 'Cape Town',
            code: 11212,
            country: 'South Africa'
        },
        contact: 'thatego@gmail.com',
        isAvailable: false
    },
    {
        image: '' ,
        title: 'Leaf Village' ,
        price: 60,
        location: {
            firstLine: '11 Naruto st',
            city: 'tokyo',
            code: 11212,
            country: 'Japan'
        },
        contact: 'keletso34@gmail.com',
        isAvailable: true
    }
]






// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)