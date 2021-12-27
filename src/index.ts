import express from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();
//consfiguation application
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//consfiguation router
app.use(statusRoute);
app.use(usersRoute);

//server startup
app.listen(3000, () => {
    console.log("applicação rodando na 3000");
})