const mongoose =  require('mongoose');

const Schema  = mongoose.Schema;

const productSchema = Schema({
    title: {type:String},
    description: {type:String},
    image:{type:String},
    price:{type:Number},
    created_at:{type:Number, default: Date.now().valueOf()},
});

module.exports = mongoose.model('product', productSchema);