import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import JWT from 'jsonwebtoken'
import userRepository from "../repositories/user.repository";


async function jwtAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers['authorization'];
        if (!authorizationHeader) {
            throw new ForbiddenError('Credencias não informadas');
        }

        const [authenticationType, token] = authorizationHeader.split(' ');
        if (authenticationType !== 'Bearer' || !token) {
            throw new ForbiddenError('Tipo de authenticação inválido');
        }
        try {
            const tokenPayload = JWT.verify(token, "my_secret_key")

            if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
                throw new ForbiddenError('token inválido');
            }
            const uuid = tokenPayload.sub;
            /*retirando consulta no banco de dados já que o token esta validado*/
            //  const user = await userRepository.findBiId(uuid);
            const user = { uuid: tokenPayload.sub, username: tokenPayload.username };
            req.user = user;
          
            next();
        } catch (error) {
            throw new ForbiddenError('token inválido');
        }
       
    } catch (error) {
        next(error);

    }

}

export default jwtAuthenticationMiddleware;