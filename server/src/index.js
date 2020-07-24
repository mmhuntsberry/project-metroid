import { GraphQLServer } from "graphql-yoga";
import * as resolvers from "./resolvers";
import * as db from "./db";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: (request) => {
    return {
      ...request,
      prisma,
    };
  },
});

server.start(() => {
  console.log("Server is listening....");
});
