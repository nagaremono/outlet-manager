import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to database');
});

const app = express();

app.use(cors());
app.use(logger('dev'));

app.listen(process.env.PORT, () => {
  console.log('App is now listening on port 4000');
});
