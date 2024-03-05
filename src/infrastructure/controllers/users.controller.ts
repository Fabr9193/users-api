import express from 'express';
import { DatabaseUserRepository } from '../repositories/user.repository';
import passport from 'passport';


const usersRoute = express.Router();

// Parse JSON bodies (as sent by API clients)
usersRoute.use(express.json());

usersRoute.post('/register', async (req, res) => {
  const userRepository = new DatabaseUserRepository();
  try {
   await userRepository.register(req.body);
   res.status(201).send('User registered');
  } catch (err) {
    res.status(400).send(err);
  }
});

usersRoute.get('/', passport.authenticate('local') ,async (req, res) => {
  const userRepository = new DatabaseUserRepository();
  try {
    const users = await userRepository.findAll();
    res.status(200).send(users);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

usersRoute.get('/:id', passport.authenticate('local'), async (req, res) => {  
  const userRepository = new DatabaseUserRepository();
  try {
    const user = await userRepository.fetchById(req.params.id);
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});
export default usersRoute;