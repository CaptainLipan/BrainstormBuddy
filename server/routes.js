import express from 'express';
import basicController from './controllers/basicController';
import userController from './controllers/userController';
import postController from './controllers/postController';
import commentController from "./controllers/commentController";
import voteController from "./controllers/voteController";


const routes = express();

// Basic routes
routes.get('/', basicController.get);

// User routes
routes.post('/signup', userController.post);

// Post routes
routes.post('/post', postController.post);
routes.get('/posts', postController.getAll);

// Comment routes
routes.post('/comment', commentController.post);

// Routes for handling votes on posts
routes.post('/post/upvote', voteController.upVotePost);
routes.post('/post/downvote', voteController.downVotePost);
routes.post('/post/undovote', voteController.undoVotePost);

// Routes for handling votes on comments
routes.post('/comment/upvote', voteController.upVoteComment);
routes.post('/comment/downvote', voteController.downVoteComment);
routes.post('/comment/undovote', voteController.undoVoteComment);




// Export routes explicitly
module.exports = routes;