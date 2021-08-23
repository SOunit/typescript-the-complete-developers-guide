import express, { Request, Response, NextFunction } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';

const app = express();

// middlerware for access req.body
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
