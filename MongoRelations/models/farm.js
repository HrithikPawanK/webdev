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

// ONE TO MANY

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
})

const Product = mongoose.model('Product', productSchema)

// Product.insertMany([
//     {name: 'Mango', price: 40, season: 'Summer'},
//     {name: 'Water Melon', price: 50, season: 'Summer'},
//     {name: 'Goa', price: 10, season: 'Winter'},
// ])

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}] 
})

const Farm = mongoose.model('Farm', farmSchema)

const makeFarm = async () => {
    const farm = new Farm({name: 'Full Belly Farms', city: 'Guinda, CA'})
    const mango = await Product.findOne({name : 'Mango'})
    farm.products.push(mango)
    await farm.save()
    console.log(farm)
}

makeFarm()

// populate => populates the ObjectIds with actual data

Farm.findOne({name : 'Fully Belly Farms'})
    .populate('products')
    .then(farm => console.log(farm))