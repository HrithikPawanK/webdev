const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/moviesApp')
    .then(() => {
        console.log("connection opened")
    })
    .catch((err) => {
        console.log(err)
    })

// creating the schema
const movieSchema = new mongoose.Schema({
    title : String,
    year : Number,
    review : Number,
    rating : String
})

// creates a collection using movieShema
const Movie = mongoose.model('Movie', movieSchema) // movies collections will be created

const rrr = new Movie({title : 'RRR', year : 2022, review : 9, rating : 'R'})
