import express from 'express';
import basicController from './contorllers/basicController';
import userController from './contorllers/userController';
import postController from './contorllers/postController';
import commentController from "./contorllers/commentController";

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
export default routes;

