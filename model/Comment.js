const mongoose=require('mongoose');
const schema=mongoose.Schema;
const commentschema=new schema({
    
    title:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    createAt:{
        type:Date,
        default:Date.now
    }
})
const commentmodel=mongoose.model('comment',commentschema)
module.exports=commentmodel