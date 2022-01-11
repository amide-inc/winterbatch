const mongoose =  require('mongoose');

const Schema  = mongoose.Schema;

const taskSchema = Schema({
    title: {type:String},
    description: {type:String},
    date:{type:Number},
});

module.exports = mongoose.model('task', taskSchema);