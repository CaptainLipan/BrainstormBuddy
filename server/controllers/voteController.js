import db from '../models/index';

const voteController = {};


// Function to handle upvoting a post
voteController.upVotePost = async (req, res) => {
    const { postId, userId } = req.body;

    try {
        // Check if the user has already upvoted the post
        const existingVote = await db.Vote.findOne({ postId, userId, voteType: 'upvote' });
        if (existingVote) {
            return res.status(400).json({ success: false, message: "User has already upvoted this post." });
        }

        // Check if the user has downvoted the post previously
        const downvote = await db.Vote.findOneAndDelete({ postId, userId, voteType: 'downvote' });

        // Create a new upvote
        const newVote = new db.Vote({ postId, userId, voteType: 'upvote' });
        await newVote.save();

        res.status(200).json({ success: true, message: "Post upvoted successfully." });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message || "Error upvoting post." });
    }
};

// Function to handle downvoting a post
voteController.downVotePost = async (req, res) => {
    const { postId, userId } = req.body;

    try {
        // Check if the user has already downvoted the post
        const existingVote = await db.Vote.findOne({ postId, userId, voteType: 'downvote' });
        if (existingVote) {
            return res.status(400).json({ success: false, message: "User has already downvoted this post." });
        }

        // Check if the user has upvoted the post previously
        const upvote = await db.Vote.findOneAndDelete({ postId, userId, voteType: 'upvote' });

        // Create a new downvote
        const newVote = new db.Vote({ postId, userId, voteType: 'downvote' });
        await newVote.save();

        res.status(200).json({ success: true, message: "Post downvoted successfully." });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message || "Error downvoting post." });
    }
};

// Function to handle undoing a vote on a post
voteController.undoVotePost = async (req, res) => {
    const { postId, userId } = req.body;

    try {
        // Find and delete the existing vote for the user on this post
        const deletedVote = await db.Vote.findOneAndDelete({ postId, userId });
        if (!deletedVote) {
            return res.status(404).json({
                success: false,
                message: `Vote not found for the post with postId: ${postId} and userId: ${userId}.`
            });
        }

        res.status(200).json({
            success: true,
            message: "Vote on post undone successfully."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Error undoing vote on post."
        });
    }
};

// Function to handle upvoting a comment
voteController.upVoteComment = async (req, res) => {
    const { commentId, userId } = req.body;

    try {
        // Check if the user has already upvoted the comment
        const existingVote = await db.Vote.findOne({ commentId, userId, voteType: 'upvote' });
        if (existingVote) {
            return res.status(400).json({ success: false, message: "User has already upvoted this comment." });
        }

        // Check if the user has downvoted the comment previously
        const downvote = await db.Vote.findOneAndDelete({ commentId, userId, voteType: 'downvote' });

        // Create a new upvote
        const newVote = new db.Vote({ commentId, userId, voteType: 'upvote' });
        await newVote.save();

        res.status(200).json({ success: true, message: "Comment upvoted successfully." });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message || "Error upvoting comment." });
    }
};

// Function to handle downvoting a comment
voteController.downVoteComment = async (req, res) => {
    const { commentId, userId } = req.body;

    try {
        // Check if the user has already downvoted the comment
        const existingVote = await db.Vote.findOne({ commentId, userId, voteType: 'downvote' });
        if (existingVote) {
            return res.status(400).json({ success: false, message: "User has already downvoted this comment." });
        }

        // Check if the user has upvoted the comment previously
        const upvote = await db.Vote.findOneAndDelete({ commentId, userId, voteType: 'upvote' });

        // Create a new downvote
        const newVote = new db.Vote({ commentId, userId, voteType: 'downvote' });
        await newVote.save();

        res.status(200).json({ success: true, message: "Comment downvoted successfully." });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message || "Error downvoting comment." });
    }
};

// Function to handle undoing a vote on a comment
voteController.undoVoteComment = async (req, res) => {
    const { commentId, userId } = req.body;

    try {
        // Find and delete the existing vote for the user on this comment
        const deletedVote = await db.Vote.findOneAndDelete({ commentId, userId });
        if (!deletedVote) {
            return res.status(404).json({
                success: false,
                message: "Vote not found for the comment."
            });
        }

        res.status(200).json({
            success: true,
            message: "Vote on comment undone successfully."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Error undoing vote on comment."
        });
    }
};

export default voteController;