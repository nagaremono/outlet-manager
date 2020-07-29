import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import protectedSchema from './graphql/schema.js';
import protectedRoot from './graphql/root.js';
import newUserSchema from './graphql/newUserSchema.js';
import newUserRoot from './graphql/newUserRoot.js';
import pkg from 'express-graphql';
import './auth/passport.js';
import passport from 'passport';
import login from './auth/login.js';

const { graphqlHTTP } = pkg;

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
app.use(passport.initialize());

app.post('/login', login);

app.use(
  '/newuser',
  graphqlHTTP({
    schema: newUserSchema,
    rootValue: newUserRoot,
    graphiql: true,
  })
);

app.use(
  '/graphql',
  passport.authenticate('jwt', { session: false }),
  graphqlHTTP({
    schema: protectedSchema,
    rootValue: protectedRoot,
    graphiql: true,
  })
);

app.listen(process.env.PORT, () => {
  console.log('App is now listening on port 4000');
});
