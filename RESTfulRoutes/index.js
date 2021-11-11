const express = require('express');
const app = express()
const path = require('path')

// we use method override so that for every request we check the HTTP verb
// because as form only allow get and post requests 
// in order to work on put, delete etc we need to use method-override

const methodOverride = require('method-override') // npm i method-override

app.use(methodOverride('_method')) // '_method' can be anything like 'xyz' etc
// it checks the queryString 
// ex:  action="/resource?_method=DELETE" // in html form 

// for generating universal unique ids  // npm i uuid
const { v4: uuidv4 } = require('uuid');

// we need to include this to get body for post request
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const comments = [
    {
        id : uuidv4(),
        username: 'Hrithik',
        comment: 'lol this is so funny'
    },
    {
        id : uuidv4(),
        username: 'manju',
        comment: 'virat is king'
    },
    {
        id : uuidv4(),
        username: 'eddi',
        comment: 'shannu worst contestant'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments})
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.get('/comments/:id', (req, res) => {
    const {id} = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', {comment})
})

app.get('/comments/:id/edit', (req, res) => {
    const {id} = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', {comment})
})

app.patch('/comments/:id', (req, res) => {
    const {id} = req.params
    const newCommentText = req.body.comment
    const foundComment = comments.find(c => c.id === id)
    foundComment.comment = newCommentText
    res.redirect('/comments')
})

app.post('/comments', (req, res) => {
    const {username, comment} = req.body;
    comments.push({username, comment, id : uuidv4()})

    // redirecting to comments url *****
    res.redirect('/comments')

})

app.get('/kfc', (req, res) => {
    res.send("GET /kfc response")
})

app.post('/kfc', (req, res) => {
    res.send("POST /kfc response")
    // post req will have body in req object (to get the requested data)
    console.log(req.body)
})

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('on port 3000')
})