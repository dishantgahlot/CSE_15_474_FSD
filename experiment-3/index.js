const express = require("express");
const { buildSchema, graphql } = require("graphql");

const app = express();
const port = Number(process.env.PORT) || 4000;

// GraphQL Schema
const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    hello: String!
    user(id: ID!): User
  }
`);

// Dummy data
const users = [
  {
    id: "1",
    name: "Aman",
    email: "aman@gmail.com",
  },
  {
    id: "2",
    name: "Rahul",
    email: "rahul@gmail.com",
  },
];

// Resolvers
const root = {
  hello: () => {
    return "Hello GraphQL!";
  },

  user: ({ id }) => {
    return users.find((user) => user.id === id);
  },
};

app.use(express.json());

// GraphQL endpoint. Send a query in the request body, for example:
// POST /graphql  { "query": "{ hello }" }
app.all("/graphql", async (req, res) => {
  const query = req.method === "GET" ? req.query.query : req.body?.query;

  if (!query) {
    return res.status(400).json({
      errors: [{ message: "Provide a GraphQL query in ?query= or in the JSON request body." }],
    });
  }

  try {
    const result = await graphql({
      schema,
      source: query,
      rootValue: root,
    });
    return res.json(result);
  } catch (error) {
    return res.status(500).json({
      errors: [{ message: error.message }],
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/graphql`);
});
