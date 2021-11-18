const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("connection open");
    })
    .catch(err => {
        console.log("OH NO ERROR!")
        console.log(err)
    })

// adding validations
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0
    },
    onsale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
})

// instance methods // we use use it for all instances
// repace greet with method name
productSchema.methods.greet = function(){
    console.log(`from ${this.name}`);
}

// toggling onsale instance methods
productSchema.methods.toggleOnSale = function(){
    this.onsale = !this.onsale;
    return this.save();
}

// static methods // method on models, but not on instances
productSchema.statics.fireSale = function(){                   
    return this.updateMany({}, {onsale: true, price: 0}) // here this is Models = Product
}

// virtuals

/*
Virtuals are document properties that you can get and set but that do not get persisted to MongoDB. 
The getters are useful for formatting or combining fields, 
while setters are useful for de-composing a single value into multiple values for storage.
*/
productSchema.virtual('nameAndPrice').get(function(){
    return `${this.name} ${this.price}`;
})

// Middleware
/*
Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions. 
Middleware is specified on the schema level and is useful for writing plugins.
*/
// doing something before or after some async operation 

productSchema.pre('save', async function(){
    // this.price = 10000 // :) 
    console.log('ABOUT TO SAVE!!!')
})

productSchema.post('save', async function(){
    console.log('JUST SAVED!!!')
})

const Product = mongoose.model('Product', productSchema);
const bike = new Product({name: 'Mountain Bike', price : 599, onsale: true, categories: ['A', 'B', 'C'], qty: {online: 10, inStore: 20}});
bike.save();

// virtuals
console.log(bike.nameAndPrice)

// enable runValidators so that the validations are applied even while updating
Product.findOneAndUpdate({name: 'Mountain Bike'}, {price: 699}, {new: true, runValidators: true})
    .then(data => {
        console.log("IT worked");
        console.log(data);
    })
    .catch(err => {
        console.log("OH NO ERROR!");
        console.log(err);
    })

const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Mountain Bike'});
    foundProduct.greet();
}
findProduct();

