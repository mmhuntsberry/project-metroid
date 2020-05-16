import { GraphQLServer } from "graphql-yoga";

// typeDefs (schema)
const typeDefs = `
  type Query {
    hello: String!
  }
 `;

// resolvers
const resolvers = {
  Query: {
    hello() {
      return `This is my first query!`;
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("Server is listening....");
});
