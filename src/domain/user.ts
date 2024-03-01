export interface User {
    id: string;
    email: string;
    password: number;
    firstName: string;
    lastName: string;
}

export interface UserRepository {
    create(user: User): Promise<User>;
}