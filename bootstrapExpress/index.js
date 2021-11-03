const express = require('express')
const app = express()

const redditData = require('./data.json')

const path = require('path')

// to serve static files(css, js) for every request 
app.use(express.static(path.join(__dirname, 'public'))) // here public is a folder in current directory which has static files
// folder can be with any name

// configuring EJS for express
app.set('view engine', 'ejs')     // npm i ejs

app.set('views', path.join(__dirname, 'views')) // __dirname -> current working directory of this file + '/views'
// when we run index.js from diffrent directory it just look for cwd/views 
// in order to remove that we set views as cwd/views. -> cwd here is directory of index.js

// we need to create views folder

app.get('/', (req, res) => {
    res.render('home')  // to render a html page (ejs)
    // no need to mention views/home.ejs because it already looks in views folder
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    // passing data using object as second parameter
    res.render('random', {rand : num})
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params
    const data = redditData[subreddit]
    if(data){
        res.render('subreddit', {...data}) // spread so we can directly use the keys inside that data
    } else {
        res.render('notfound', {subreddit})
    }
})

app.get('/cats', (req, res) => {
    const cats = ['blue', 'rocket', 'monty', 'winston']
    res.render('cats', {cats})
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})