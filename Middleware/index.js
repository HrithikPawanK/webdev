const express = require('express')
const app = express()
const morgan = require('morgan') // morgan helps in logging the http req to console

app.use(morgan('tiny'))

app.use((req, res, next) => {
    console.log(req.method, req.path)
    next() // to start the next middleware and not to stop here
})

app.get('/', (req, res) => {
    res.send('Home')
})

const verifyPassword = (req, res, next) => {
    const {password} = req.query
    if(password === 'hrithik'){
        next()
    }else{
        res.send('Correct password is required')
    }
}

// here verifyPassword will be called first
// if verifyPassword returns next then 2nd call back is called
// else res.send('Correct password is required') is called
app.get('/secret', verifyPassword, (req, res) => {
    res.send('sorry i will not tell')
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND!!')
})

app.listen(3000, () => {
    console.log('listening on port 3000!!!')
})