const UserModel = require('../model/User');
const PostModel = require('../model/Post');
const CommentModel = require('../model/Comment');

const getlookup = async (req, res) => {
    try {
        const lookup = await UserModel.aggregate([
            {
                $lookup: {
                    from: 'posts',
                    localField: 'name',
                    foreignField: 'auther',
                    as: 'user_post'
                }
            },
            {
                $unwind: '$user_post'
            },
            {
                $lookup: {
                    from: 'comments',
                    localField: 'user_post.title',
                    foreignField: 'title',
                    as: 'user_post.user_comment'
                }
            }
        ])
        res.status(200).json({ success: true, message: "get Lookup successfully...", data:lookup })
    } catch (err) {
        res.status(404).json(err.message)
    }
}


module.exports = {
    getlookup
}