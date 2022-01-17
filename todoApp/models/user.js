const mongoose =  require('mongoose');

const Schema  = mongoose.Schema;

const userSchema = Schema({
    displayName: {type:String, required: true, },
    email: {type:String, required: true, unique: true},
    password:{type:String, required: true,},
    created_at:{type:Number, default: Date.now().valueOf()},
});

module.exports = mongoose.model('user', userSchema);