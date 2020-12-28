const mongoose = require('mongoose')


const Order = mongoose.model('Order',{

    products: {
        type: Object,
        
        required: true,
        lowercase: true,
        trim: true,
    }, 
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        
    },
    totalPrice:{
        type:String,
        required: true,
        trim: true
    }

})

module.exports = Order