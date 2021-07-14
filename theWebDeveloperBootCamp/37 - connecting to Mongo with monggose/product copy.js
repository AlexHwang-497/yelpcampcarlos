const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

    const productSchema = new mongoose.Schema({
        name: {
            type:String,
            required: true
        },
        price: {
            type: Number,
            required: true,
            min: [0,'Price must be positive ya dodo!']

        },
        onSale: {
            type: Boolean,
            default: false
        },
        categories: [String],
        qty: {
            online: {
                type: Number,
                default:0
            },
            inStore: {
                type: Number,
                default:0
            }
        },
        size: {
            type: String,
            enum: ['S', 'M', 'L']
        }
    })

    productSchema.methods.greet = function(){
        console.log('Hello!!!! Hi!!!! howdy!!!!')
        console.log(`- from ${this.name}`)
    }
    productSchema.methods.toggleOnSale = function(){
        this.onSale = !this.onSale;
        return this.save()
        // this.save()
    }
    productSchema.methods.addCategory = function(newCat){
        this.categories.push(newCat)
        return this.save()
    }

    productSchema.statics.fireSale = function () {
        return this.updateMany({}, { onSale: true, price: 0 })
    }
    
    
    
    const product = mongoose.model('Product', productSchema)
    
    const findProduct = async() => {
        const foundProduct = await product.findOne({name: 'Mountain Bike'})
        
        await foundProduct.toggleOnSale()
        console.log(foundProduct)
        await foundProduct.addCategory('Outdoors')
        console.log(foundProduct)
        // foundProduct.greet()
        // foundProduct.onSale=!foundProduct.onSale
        // foundProduct.save()
    }
    Product.fireSale().then(res => console.log(res))
    

    findProduct();


    // const bike = new product({ name:'Cycling Jersey', price: 29.50, categories: ['Cycling', 'Safety'], size: 'XS'})
    // bike.save()
    //     .then(data=>{
    //         console.log("IT Worked!")
    //         console.log(data)
    //     })
    //     .catch(err=> {
    //         console.log("Oh no error!!!")
    //         console.log(err.errors.name.properties.message)
    //     })

    // // product.findOneAndUpdate({name: 'Tire Pump'}, {price: 9}, {new: true, runValidators:true})
    // //     .then(data=> {
    //         console.log("it worked!")
    //         console.log(data)
    //     }) 
    //     .catch(err=> {
    //         console.log("Oh no error!")
    //         console.log(err)
    //     })