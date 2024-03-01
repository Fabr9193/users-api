import express from 'express';
import usersRoute from './src/infrastructure/controllers/users';
const app = express();

const port = process.env.PORT || 3000;

app.use('/users', usersRoute);
app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
    }
);

export default app;
