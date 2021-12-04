const mongoose = require('mongoose')
const {Schema} = mongoose

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
    .then(() => {
        console.log('Mongo Connection Open!!')
    })
    .catch(err => {
        console.log('mongo connection error')
        console.log(err )
    })

// ONE TO Bajilions

const userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

const User = mongoose.model('User', userSchema)
const Tweet = mongoose.model('Tweet', tweetSchema)

// const makeTweets = async () => {
//     const user = new User({username: 'hrithik', age: 21})
//     const tweet1 = new Tweet({text: 'omg i love my chicken family', likes: 10})
//     tweet1.user = user
//     await user.save()
//     await tweet1.save()
// }

// makeTweets()

const findTweet = async () => {
    const t = await Tweet.findOne({}).populate('user', 'username') // if we want only username we can add it as another argument
    console.log(t)
}

findTweet()