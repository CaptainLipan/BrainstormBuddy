import db from '../models/index';

const commentController = {};

commentController.post = (req, res) => {
    const {
        text,
        postId,
        userId
    } = req.body;

    // validation

    const comment = new db.Comment({
        text,
        _creator: userId,
        _post: postId,
    });

    comment.save().then((newComment) => {
        db.Post.findByIdAndUpdate(
            postId,
            { $push: { _comments: newComment._id } }
        ).then((existingPost) => {
            res.status(200).json({
                success: true,
                data: newComment,
                existingPost,
            });
        }).catch((err) => {
            res.status(500).json({
                message: err,
            });
        });
    }).catch((err) => {
        res.status(500).json({
            message: err,
        });
    });
};

export default commentController;