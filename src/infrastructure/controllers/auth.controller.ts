import express from "express";
import { DatabaseUserRepository } from "../repositories/user.repository";
import { compareSync } from "bcrypt";
import { TokenService } from "../token.service";

const authRoutes = express.Router();

// Parse JSON bodies (as sent by API clients)
authRoutes.use(express.json());
const userRepository = new DatabaseUserRepository();

authRoutes.post('/register', async (req, res) => {
  
    try {
     await userRepository.register(req.body);
     console.log('User registering');
     res.status(201).send('User registered');
    } catch (err) {
      res.status(400).send(err);
    }
  });

  authRoutes.post('/login' ,async (req, res, next) => {
    const { email, password } = req.body;
  
    const user = await userRepository.findByEmail(email);
  
    if (!user || !(await compareSync(password, user.password))) {
      return res.status(401).send('Invalid email or password');
    }
  
    const token = new TokenService().generateToken(user);
    res.setHeader('X-API-Key', `${token}`);  
    res.status(200).json({ message: 'Logged in successfully' });
  });

export default authRoutes;