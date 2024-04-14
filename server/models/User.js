import mongoose from "mongoose";

const {Schema} = mongoose;

mongoose.Promise = global.Promise;

const UserSchema = new Schema({
username: {
        type: String,
        required: true,
        minLength: [3, 'Name must be at least 3 characters long'],
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Password must be at least 8 characters long'],
        },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    });
//encrypt password

const User = mongoose.model('User', UserSchema);
export default User;