const mongoose = require('mongoose'),
schema = mongoose.Schema;

let userSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    isOver21:{
        type:Boolean,
        required:false
    }
});

module.exports = mongoose.model('User', userSchema);