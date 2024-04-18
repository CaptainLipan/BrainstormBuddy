import mongoose from "mongoose";

const { Schema } = mongoose;

const voteSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    postId: { type: Schema.Types.ObjectId, ref: 'Post' }, // postId field for post votes
    commentId: { type: Schema.Types.ObjectId, ref: 'Comment' }, // commentId field for comment votes
    voteType: { type: String, enum: ['upvote', 'downvote'], required: true } // Added voteType field
});

const Vote = mongoose.model('Vote', voteSchema);

export default Vote;
