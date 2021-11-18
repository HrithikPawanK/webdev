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
rrr.save()

// inserting many at a time
// no need to use save() if we use many
Movie.insertMany([              // its a promise
    {title : 'SIRA', year : 2023, review : 10, rating : 'R'},
    {title : 'sss', year : 2023, review : 10, rating : 'R'},
    {title : 'SC', year : 2023, review : 10, rating : 'R'},
]).then(data => {
    console.log("It worked");
    console.log(data);
})




