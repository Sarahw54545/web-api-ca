import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies'; 
import './db';
// other imports
import cors from 'cors';
import usersRouter from './api/users';
import userDataRouter from './api/userData';
import authenticate from './authenticate';

dotenv.config();
const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};

const app = express();

const port = process.env.PORT;

// Enable CORS for all requests
app.use(cors());

app.use(express.json());

// app.use('/api/tasks', authenticate, tasksRouter); FROM TASKY LABS

//TMDB Movies Router
app.use('/api/movies', moviesRouter);

//Users router
app.use('/api/users', usersRouter);

//UserData Router
app.use('/api/userData', authenticate, userDataRouter);

app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});