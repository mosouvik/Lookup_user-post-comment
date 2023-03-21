const mongoose=require('mongoose');
const schema=mongoose.Schema;
const userschema=new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})
const usermodel=mongoose.model('user',userschema)
module.exports=usermodel