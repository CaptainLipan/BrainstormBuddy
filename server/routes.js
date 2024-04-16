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

// Vote routes
routes.post('/vote/upVotePost', voteController.upVotePost);
routes.post('/vote/downVotePost', voteController.downVotePost);
routes.post('/vote/upVoteComment', voteController.upVoteComment);
routes.post('/vote/downVoteComment', voteController.downVoteComment);

//undoVote routes
routes.post('/vote/undoUpVotePost', voteController.undoUpVotePost);
routes.post('/vote/undoDownVotePost', voteController.undoDownVotePost);
routes.post('/vote/undoUpVoteComment', voteController.undoUpVoteComment);
routes.post('/vote/undoDownVoteComment', voteController.undoDownVoteComment);

// Export routes explicitly
module.exports = routes;