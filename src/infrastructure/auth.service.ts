import { TokenService } from "./token.service";

export class AuthService {
    checkAuthentication(req: any, res: any, next: any) {
        const token = req.headers['x-api-key'];
        const tokenService = new TokenService();
        if (!token  || !tokenService.isTokenValid(token)){
          return res.status(401).send({message : 'Unauthorized'});
        }
        next();
      }
}

