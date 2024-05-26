import express from 'express';
import bodyParser from 'body-parser';
import acl from 'express-acl';
import routes from './routes';
import database from './database';
import authMiddleware from './middlewares/auth';

acl.config({
    baseUrl: '/',
    path: 'config'
});

const app = express();
app.use(bodyParser.json());
app.use(authMiddleware);
app.use(acl.authorize.unless({path:['/users/authenticate']}));
app.use("/", routes);
app.database = database;

export default app;