import pkg from 'graphql';

const { buildSchema } = pkg;

const schema = buildSchema(`
  type Query {
    user: User
  }

  type Mutation {
    register(input: RegisterInput): User
  }

  type User {
    id: String!
    username: String
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmpassword: String!
  }
`);

export default schema;
