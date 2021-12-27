import express, { Request, Response, NextFunction } from 'express'
import usersRoute from './routes/users.route';

const app = express();
//consfiguation application
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//consfiguation router
app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Sucesso' });
});

//server startup
app.listen(3000, () => {
    console.log("applicação rodando na 3000");
})