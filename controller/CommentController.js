const CommentModel=require('../model/Comment');

const addcomment=async(req,res)=>{
    try {
        const comment = await new CommentModel({
           title:req.body.title,
            comment: req.body.comment,
            
        })
        const commentdata = await comment.save()
        res.status(201).json({ success: true, message: "comment added successfully...", data: commentdata })
    } catch (err) {
        res.status(404).json(err.message)
    }
}


const getcomment=async(req,res)=>{
    try {
        const allcomment = await CommentModel.find()
        res.status(200).json({ success: true, message: "Get all comments successfully...", data: allcomment })
    } catch (err) {
        res.status(404).json(message.err)
    }
}

module.exports={
    addcomment,
    getcomment
}