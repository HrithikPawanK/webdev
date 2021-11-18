// this file is just for adding some data to test, just for development :)

const mongoose = require('mongoose');
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand')
.then(() => {
    console.log("MONGO CONNECTION OPEN!!")
})
.catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!")
    console.log(err)
})

const seedProducts = [
    {
        name: 'Apple',
        price: 2,
        category: 'fruit'
    },
    {
        name: 'Orange',
        price: 3,
        category: 'fruit'
    },
    {
        name: 'Potato',
        price: 1,
        category: 'vegetable'
    }
]

Product.insertMany(seedProducts)
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})