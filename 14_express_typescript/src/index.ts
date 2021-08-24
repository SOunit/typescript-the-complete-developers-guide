import express, { Request, Response, NextFunction } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

// middlerware for access req.body
// request has body, but request object in node has no body by default
// bodyParser inspects request, get string of body, parse it, and put it to request object!
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieSession({ keys: ['some_text_to_encoding_decoding'] }));

app.use(router);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
