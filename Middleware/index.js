const express = require('express')
const app = express()
const morgan = require('morgan') // morgan helps in logging the http req to console
const AppError = require('./appError')

app.use(morgan('tiny'))

app.use((req, res, next) => {
    console.log(req.method, req.path)
    next() // to start the next middleware and not to stop here
})

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/error', (req, res) => {
    chicken.fly();
})

const verifyPassword = (req, res, next) => {
    const {password} = req.query
    if(password === 'hrithik'){
        next()
    }
    throw new AppError('password required', 401);
}

// here verifyPassword will be called first
// if verifyPassword returns next then 2nd call back is called
// else res.send('Correct password is required') is called
app.get('/secret', verifyPassword, (req, res) => {
    res.send('sorry i will not tell')
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not an Admin', 403)
})

// if routes doesn't match with any of the routes then this will be called
app.use((req, res) => {
    res.status(404).send('NOT FOUND!!')
})

// handling async errors

/*
    For errors returned from asynchronous functions invoked by route handlers and middleware, 
    you must pass them to the next() function, where Express will catch and process them

    ex:

    app.get('/products/:id/edit', async (req, res, next) => {
        const {id} = req.params;
        const product = await Produt.findById(id);
        if(!product){
            return next(new AppError('Product Not Found', 404)); // *** we return next so that next lines won't execute.
        }
        res.render('products/edit', {products, categories});
    })
*/


// creating own error handlers
// it should be kept at last. it is executed when there's error in any of the routes
// app.use((err, req, res, next) => {
//     console.log('Error occured')
//     // next(err) -> if there's next(err) then default error handlers are called.
//     // next() -> non error route handlers are called
// })

app.use((err, req, res, next) => {
    const {status = 500, message = 'Something went wrong'} = err;
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log('listening on port 3000!!!')
})