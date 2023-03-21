const PostModel = require('../model/Post');

const addpost = async (req, res) => {
    try {
        const post = await new PostModel({
            auther: req.body.auther,
            title: req.body.title,
            subtitle: req.body.subtitle,
            content: req.body.content,
        })
        const postdata = await post.save()
        res.status(201).json({ success: true, message: "Post added successfully...", data: postdata })
    } catch (err) {
        res.status(404).json(err.message)
    }
}

const getpost=async(req,res)=>{
    try {
        const allpost = await PostModel.find()
        res.status(200).json({ success: true, message: "Get all posts successfully...", data: allpost })
    } catch (err) {
        res.status(404).json(message.err)
    }
}

module.exports = {
    addpost,
    getpost
}