const express = require('express')
const app = express()

const path = require('path')

app.use(express.static(path.join(__dirname, '/public')))

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/free', (req, res) => {
    res.send('<h1> You have purchased personel plan </h1>')
})

app.get('/medium', (req, res) => {
    res.send('<h1> You have purchased small team plan </h1>')
})

app.get('/high', (req, res) => {
    res.send('<h1> You have purchased enterprise plan </h1>')
})

app.listen(3000, () => {
    console.log('listening on the port 3000')
})