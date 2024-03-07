import { User } from "../domain/user";
import "dotenv/config";

const GLOBAL_TOKEN = process.env.API_TOKEN

export class TokenService {
    generateToken(user: User): string   {
        return GLOBAL_TOKEN ?? 'NO_TOKEN' ;
    }

    isTokenValid(token: string): boolean {
        return token === GLOBAL_TOKEN ;
    }
}