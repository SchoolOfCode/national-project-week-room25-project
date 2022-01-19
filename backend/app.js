import express from 'express';
import path from 'path';

import __dirname  from './dirname.js';
import cookieParser  from 'cookie-parser';
import cors  from 'cors';
import logger  from 'morgan';

import usersRouter  from './routes/users.js';
import requestRouter from "./routes/requests.js";
import responseRouter from "./routes/response.js"


const app = express();

app.use(logger('dev'));
// app.use(cors(corsOptions));
app.use(cors({
  origin: 'http://127.0.0.1:5500',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/users', usersRouter);
app.use('/requests', requestRouter);
app.use('/response', responseRouter);

app.use(function (req, res, next) {
  res.status(404).json({message: "We couldn't find what you were looking for 😞"})
})



app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json(err)
})

export default app;
