import {Router, Request,Response,NextFunction} from 'express'
// get /users
// get /users/:uuid
// post /users
// put /users/:randomUUID
// delete /users/:uuid

const usersRoute = Router();

usersRoute.get('/users', (req: Request,res: Response,next: NextFunction) =>{
    const users =[{useName:'Gabriel'}]
    res.status(200).send(users);
});


usersRoute.get('/users/:uuid',(req: Request<{uuid: string}>,res: Response,next: NextFunction) =>{
    const uuid = req.params.uuid;
    res.status(200).send({uuid});
})

export default usersRoute;