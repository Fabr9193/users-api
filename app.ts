import express from 'express';
import usersRoutes from './src/infrastructure/controllers/users.controller';
import authRoutes from './src/infrastructure/controllers/auth.controller';



const app = express();

const port = process.env.PORT || 3000;

app.use('/users', usersRoutes);
app.use('/auth', authRoutes);


app.listen(port, () => {
    console.log('Server is running on port ' + port);
    }
);

export default app;
