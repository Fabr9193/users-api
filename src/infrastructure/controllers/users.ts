import express from 'express';
import UserModel from '../database/models/user.models';
import { DatabaseUserRepository } from '../repositories/user.repository';


const usersRoute = express.Router();

// Parse JSON bodies (as sent by API clients)
usersRoute.use(express.json());

usersRoute.post('/', async (req, res) => {
  const userRepository = new DatabaseUserRepository();
  try {
   await userRepository.create(req.body);
  } catch (err) {
    res.status(400).send(err);
  }
});

export default usersRoute;