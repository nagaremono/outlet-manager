import pkg from 'graphql';

const { buildSchema } = pkg;

const schema = buildSchema(`
  type Query {
    customers: [Customer]
    plans: [Plan]
    transactions: [Transaction]
    user: User
  }

  type Mutation {
    createPlan(input: PlanInput): Plan!
    updatePlan(id: String, input: PlanInput): Plan!
    deletePlan(id: String): Plan!

    createTransaction(input: TransactionInput): Transaction!
    deleteTransaction(id: String): Transaction!
  }

  type Plan {
    id: String!
    name: String!
    provider: String!
    price: Int!
    details: String!
  }

  type Customer {
    id: String!
    name: String!
    number: String!
  }

  type User {
    id: String!
    username: String
  }

  type Transaction {
    id: String!
    plan: Plan
    date: String
    customer: Customer
  }

  input PlanInput {
    name: String!
    provider: String!
    price: Int!
    details: String!
  }

  input TransactionInput {
    plan: String
    customerName: String
    customerNumber: String
  }
`);

export default schema;
