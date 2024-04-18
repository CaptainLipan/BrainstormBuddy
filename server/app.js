// Initialize express app
import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Routes
app.use('/api', routes);



export default app;