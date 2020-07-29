# Outlet Manager

A web application which helps a data plan retailer record their sold internet package.
This app utilizes nodejs and Express as back-end server and React as front-end client.
The back-end server is structured to be a graphql API, hence in the future the client
would use Apollo with React to query and mutate data.

# Current Development

Unfortunately, at the time of writing I have only finished implementing the back-end
server. It seems a tad overambitious to challenge myself into writing the server using
technology I am not familiar with yet. During development, I have also exhausted database
request limit for mongoDB, thus the app is currently unusable. It should be accessible again
in 24 hours.

# Install

After you've cloned this repository, you need to install the dependencies, run:

```bash
cd into the directory
npm install
```

In addition, you would also need to install front-end dependencies:

```bash
cd client
npm install
```

To run the server:

```bash
npm run server
```

When the front-end client is complete, you can run both server and client with:

```bash
npm run dev
```

# Usage

The graphql route is protected with jwt authentication. To create a new user account and
get authentication token, run the server and then:

1. Make a POST request to http://localhost:5000/register with the following body:
   .._ username: username
   .._ password: password
   ..\* confirmpassword: confirmpassword


    The server with then serve the created user in JSON format

2. Using the created login credetials, make a POST request to http://localhost:5000/login
   .._ username: username
   .._ password: password


    The server would then serve a JWT that you should keep in authorization header as
    'Bearer <JWT>` to access the protected graphql routes.

That would be the normal usage. I realize however that this application is far from complete.
To remove the authentication, you can go to App.js and remove the following lines.

```javascript
app.post('/login', login);

app.post('/register', registerMiddleware);

passport.authenticate('jwt', { session: false }),
```

You should then be able to make queries to http://localhost:8000/graphql using the graphiql GUI
following the schema defined in /graphql/schema

# Thank you

To anyone who took the time to look at this, I thank you. While I haven't finished the whole app,
this has been a great learning experience, and most of all I had fun writing it. Thank you.
