import express from 'express';
import logger from 'morgan';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(logger('dev'));

app.listen(4000, () => {
  console.log('App is now listening on port 4000');
});
