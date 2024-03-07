import { v4 as uuidv4 } from "uuid";
import { UserRepository, User } from "../../domain/user";
import UserModel from "../database/models/user.models";
import bcrypt from "bcrypt";

export class DatabaseUserRepository implements UserRepository {
    async register(user: User): Promise<User> {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const newUser = await UserModel.create({
            id: uuidv4(),
            email: user.email,
            password: hashedPassword,
            firstName: user.firstName,
            lastName: user.lastName,
        });
        return newUser.toJSON() as User;
    }

    async findAll(): Promise<User[]> {
        const users = await UserModel.findAll();
        return users.map((user: UserModel) => user.toJSON() as User);
    }

    async fetchById(id: string): Promise<User | null> {
        const user = await UserModel.findByPk(id);
        if (user) {
            return user.toJSON() as User;
        }
        return null;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await UserModel.findOne({ where: { email } });
        if (user) {
            return user.toJSON() as User;
        }
        return null;
    }
    async update(userId : string ,user: User): Promise<User> {
        const updatedUser = await UserModel.update(user, { where: { id: userId }, returning: true });
        return updatedUser[1][0].toJSON() as User;
    }   
}