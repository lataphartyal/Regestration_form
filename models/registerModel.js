const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    title:{type:String, required:true,enum:["Mr", "Mrs", "Miss", 'Must be mr, mrs or miss, no other values can be accepted, got {value}'],trim: true},
    name:{type:String, required:true, trim:true},
    phone:{type:String, required:true, unique:true,trim:true},      
    email:{type:String, required:true,  unique:true,trim:true},
    password:{type:String, required:true, trim:true, minlength:[8,'Must be atleast 8 characters'], maxlength:[15,'Must be atmost 15 characters'] },
    }
    ,{timestamp: true });
    module.exports = mongoose.model('user', userSchema)