import mongoose from "mongoose";

const { Schema } = mongoose;

const voteSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: Schema.Types.ObjectId, ref: 'Post' },
    comment: { type: Schema.Types.ObjectId, ref: 'Comment' },
    isUpVoted: { type: Boolean } // Default value is neutral
});

const Vote = mongoose.model('Vote', voteSchema);

export default Vote;
