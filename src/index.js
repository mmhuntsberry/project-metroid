import { GraphQLServer } from "graphql-yoga";

// typeDefs (schema)
const typeDefs = `
  type Query {
    hello: String!
    game: Game!
  }

  type Game {
    id: ID!
    title: String!
    releaseYear: Int!
    platform: String!
    rating: Float
  }
 `;

// resolvers
const resolvers = {
  Query: {
    hello() {
      return `This is my first query!`;
    },
    game() {
      return {
        id: "001",
        title: "Pong",
        releaseYear: 1975,
        platform: "Atari",
        rating: 5.0,
      };
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
