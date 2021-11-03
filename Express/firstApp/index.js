const express = require('express');
const app = express();

// for any incomming request 'use' will be executed
// req, res are objects 
// app.use((req, res) => {
//     console.log("we got a new request")
//     console.dir(req)
//     res.send('<h1>This is the response</h1>')
// })


// responding to get request
app.get('/', (req, res) => {
    res.send('this is home page')
})

app.get('/cats', (req, res) => {
    res.send('meow')
})

app.get('/dogs', (req, res) => {
    res.send('woof!')
})

// routing pattern with ':' -> path parameters 
app.get('/r/:subreddit', (req, res) => {
    // in req object we will have params 
    // it contains xyz : abc --> xyz is path parameter
    const {subreddit} = req.params
    res.send(`Browsing the ${subreddit} subreddit`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const {subreddit, postId} = req.params
    res.send(`Viewing post ${postId} on the subreddit ${subreddit}`)
}) 

// query string
// search?q=dog?color=blue
app.get('/search', (req, res) => {
    const {q} = req.query
    if(!q){
        res.send('you missed a query')
    }
    res.send(`Search results for ${q}`)
})

// routes other than above metioned
app.get('*', (req, res) => {
    res.send('I dont know that route')
})

// responding to post request

app.post('/cats', (req, res) => {
    res.send('Post request to /cats, this is different than get request')
})

// listening from a port
app.listen(8080, () => {
    console.log("Listening on port 8000")
})

// nodemon -> npm install nodemon -> auto restarts server
// npm i -g nodemon --> global install