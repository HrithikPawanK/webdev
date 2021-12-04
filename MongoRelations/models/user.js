const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/relationshipDemoOB')
    .then(() => {
        console.log('Mongo Connection Open!!')
    })
    .catch(err => {
        console.log('mongo connection error')
        console.log(err)
    })


// ONE TO FEW // Embedding directly  
const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id : {id : false}, // if we didn't keep this ids will be created for each addresses
            street: String,
            city: String,
            state: String,
            country: String,
        }
    ]
})

const User = mongoose.model('User', userSchema)

const makeUser = async () => {
    const u = new User({
        first: 'Kakkireni',
        last: 'Hrithik Pawan'
    })
    u.addresses.push({
        street: 'central bank',
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India'
    })
    const res = await u.save();
    console.log(res)
}

makeUser()