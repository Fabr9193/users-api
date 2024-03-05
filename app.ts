import express from 'express';
import usersRoute from './src/infrastructure/controllers/users.controller';
import passport from 'passport';
import UserModel from './src/infrastructure/database/models/user.models';
import { Strategy as LocalStrategy } from 'passport-local'; 
import bcrypt from 'bcrypt';
const app = express();

const port = process.env.PORT || 3000;
passport.use(new LocalStrategy(
        async (username, password, done) => {
            try {
                const user = await UserModel.findOne({ where: { email: username } });
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                const isValidPassword = bcrypt.compareSync(password, user.password);
                if (!isValidPassword) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            } catch (err) {
                console.log(err);
                return done(err);
            }
        }
    ));
    
passport.serializeUser((user , done) => {
        done(null, user);
});

passport.deserializeUser(async (id : string, done: Function) => {
    try {
        const user = await UserModel.findByPk(id);
        done(null, user);
    } catch (err) {
        console.log(err);
        done(err);
    }
});
  
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
