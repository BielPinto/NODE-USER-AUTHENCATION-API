import { Router, NextFunction, Request, Response } from "express";
import JWT from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";
import basicAuthenticationMiddleware from "../middlewares/basic.authentication.middleware";
import ForbiddenError from "../models/errors/forbidden.error.model";

const authorizationRoute = Router();

authorizationRoute.post('/token', basicAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user;

        if (!user) {
            throw new ForbiddenError('Usuário não informado!');
        }
        const jwtPayload = { username: user.username }
        const jwtOption = { subject: user.uuid }
        const secretKey = 'my_secret_key';

        const jwt = JWT.sign(jwtPayload, secretKey, jwtOption);
        res.status(StatusCodes.OK).json({ token: jwt });

    } catch (error) {
        next(error);
    }


})

export default authorizationRoute;