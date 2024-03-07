export interface User {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface UserRepository {
    register(user: User): Promise<User>;
    findAll(): Promise<User[]>;
    fetchById(id: string): Promise<User | null> ;
    findByEmail(email: string): Promise<User | null>;
}