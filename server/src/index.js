import { GraphQLServer } from "graphql-yoga";
import * as resolvers from "./resolvers";
import * as db from "./db";
import "./prisma";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: {
    db,
  },
});

server.start(() => {
  console.log("Server is listening....");
});
