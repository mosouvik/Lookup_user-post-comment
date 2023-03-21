const mongoose=require('mongoose');
const schema=mongoose.Schema;
const postschema=new schema({
    auther:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    subtitle:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    createAt:{
        type:Date,
        default:Date.now
    }
})
const postmodel=mongoose.model('post',postschema)
module.exports=postmodel