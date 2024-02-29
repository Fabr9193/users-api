import express from 'express';
import userRoutes from './src/controllers/users';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// User routes
app.use('/users', userRoutes);