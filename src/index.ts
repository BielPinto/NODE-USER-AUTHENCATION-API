import express from 'express';
import jwtAuthenticationMiddleware from './middlewares/jwt-authentication.middleware';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();
//consfiguation application
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//consfiguation router
app.use(statusRoute);
app.use(authorizationRoute);

app.use(jwtAuthenticationMiddleware)
app.use(usersRoute);

//configutarion error handles
app.use(errorHandler)
//server startup
app.listen(3000, () => {
    console.log("applicação rodando na 3000");
})