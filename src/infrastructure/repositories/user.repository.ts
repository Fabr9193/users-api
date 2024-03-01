import { v4 as uuidv4 } from "uuid";
import { UserRepository, User } from "../../domain/user";
import UserModel from "../database/models/user.models";

export class DatabaseUserRepository implements UserRepository {
    async create(user: User): Promise<User> {
        const newUser = await UserModel.create({
            id: uuidv4(),
            email: user.email,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
        });
        return newUser.toJSON() as User;
    }
}