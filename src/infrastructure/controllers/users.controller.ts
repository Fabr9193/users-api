import express from 'express';
import { DatabaseUserRepository } from '../repositories/user.repository';
import { compareSync } from 'bcrypt';
import { TokenService } from '../token.service';
import { AuthService } from '../auth.service';


const usersRoutes = express.Router();
const authService = new AuthService();

// Parse JSON bodies (as sent by API clients)
usersRoutes.use(express.json());
const userRepository = new DatabaseUserRepository();


usersRoutes.get('/', authService.checkAuthentication, async (req, res) => {
  try {
    const users = await userRepository.findAll();
    res.status(200).send(users);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

usersRoutes.get('/:id', authService.checkAuthentication ,async (req, res) => {  
  try {
    const user = await userRepository.fetchById(req.params.id);
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});


export default usersRoutes;

