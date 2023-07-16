import express, { Application } from 'express';
import usersRouter from './routes/users';
import articlesRouter from './routes/articles';
import commentsRouter from './routes/comments';

const app: Application = express();
app.use(express.json());

// Routes
app.use('/users', usersRouter);
app.use('/articles', articlesRouter);
app.use('/comments', commentsRouter);

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});