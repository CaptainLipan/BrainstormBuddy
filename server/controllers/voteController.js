import  db  from '../models/index';

const voteController = {};

// Function to handle upVoting a post
voteController.upVotePost = (req, res) => {
    const { postId, userId } = req.body;

    // Check if the user has already voted on this post
    db.Vote.findOne({ postId, userId })
        .then((existingVote) => {
            if (existingVote) {
                // If the user has already voted, update the existing vote
                existingVote.isUpVoted = true;
                return existingVote.save();
            } else {
                // If the user has not voted yet, create a new vote
                const newVote = new db.Vote({
                    postId,
                    userId,
                    isUpVoted: true
                });
                return newVote.save();
            }
        })
        .then((updatedVote) => {
            res.status(200).json({
                success: true,
                data: updatedVote
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "Error upVoting post."
            });
        });
};

// Function to handle downVoting a post
voteController.downVotePost = (req, res) => {
    const { postId, userId } = req.body;

    // Check if the user has already voted on this post
    db.Vote.findOne({ postId, userId })
        .then((existingVote) => {
            if (existingVote) {
                // If the user has already voted, update the existing vote
                existingVote.isUpVoted = false;
                return existingVote.save();
            } else {
                // If the user has not voted yet, create a new vote
                const newVote = new db.Vote({
                    postId,
                    userId,
                    isUpVoted: false
                });
                return newVote.save();
            }
        })
        .then((updatedVote) => {
            res.status(200).json({
                success: true,
                data: updatedVote
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "Error downVoting post."
            });
        });
};

// Function to handle undoing an upvote on a post
voteController.undoUpVotePost = (req, res) => {
    const { postId, userId } = req.body;

    // Find and remove the existing vote for the user on this post
    db.Vote.findOneAndDelete({ postId, userId, isUpVoted: true })
        .then(() => {
            res.status(200).json({
                success: true,
                message: "Upvote undone successfully."
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "Error undoing upvote on post."
            });
        });
};

// Function to handle undoing a downvote on a post
voteController.undoDownVotePost = (req, res) => {
    const { postId, userId } = req.body;

    // Find and remove the existing vote for the user on this post
    db.Vote.findOneAndDelete({ postId, userId, isUpVoted: false })
        .then(() => {
            res.status(200).json({
                success: true,
                message: "Downvote undone successfully."
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "Error undoing downvote on post."
            });
        });
};


// Function to handle upvoting a comment
voteController.upVoteComment = (req, res) => {
    const { commentId, userId } = req.body;

    // Check if the user has already voted on this comment
    db.Vote.findOne({ commentId, userId })
        .then((existingVote) => {
            if (existingVote) {
                // If the user has already voted, update the existing vote
                existingVote.isUpVoted = true;
                return existingVote.save();
            } else {
                // If the user has not voted yet, create a new vote
                const newVote = new db.Vote({
                    commentId,
                    userId,
                    isUpVoted: true
                });
                return newVote.save();
            }
        })
        .then((updatedVote) => {
            res.status(200).json({
                success: true,
                data: updatedVote
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "Error upVoting comment."
            });
        });
};

// Function to handle downvoting a comment
voteController.downVoteComment = (req, res) => {
    const { commentId, userId } = req.body;

    // Check if the user has already voted on this comment
    db.Vote.findOne({ commentId, userId })
        .then((existingVote) => {
            if (existingVote) {
                // If the user has already voted, update the existing vote
                existingVote.isUpVoted = false;
                return existingVote.save();
            } else {
                // If the user has not voted yet, create a new vote
                const newVote = new db.Vote({
                    commentId,
                    userId,
                    isUpVoted: false
                });
                return newVote.save();
            }
        })
        .then((updatedVote) => {
            res.status(200).json({
                success: true,
                data: updatedVote
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "Error downVoting comment."
            });
        });
};

// Function to handle undoing an upvote on a comment
voteController.undoUpVoteComment = (req, res) => {
    const { commentId, userId } = req.body;

    // Find and remove the existing vote for the user on this comment
    db.Vote.findOneAndDelete({ commentId, userId, isUpVoted: true })
        .then(() => {
            res.status(200).json({
                success: true,
                message: "Upvote on comment undone successfully."
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "Error undoing upvote on comment."
            });
        });
};

// Function to handle undoing a downvote on a comment
voteController.undoDownVoteComment = (req, res) => {
    const { commentId, userId } = req.body;

    // Find and remove the existing vote for the user on this comment
    db.Vote.findOneAndDelete({ commentId, userId, isUpVoted: false })
        .then(() => {
            res.status(200).json({
                success: true,
                message: "Downvote on comment undone successfully."
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "Error undoing downvote on comment."
            });
        });
};

export default voteController;
