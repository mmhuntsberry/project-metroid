import { GraphQLServer } from "graphql-yoga";
import * as resolvers from "./resolvers";
import * as db from "./db";
import { APP_SECRET } from "../utils/helpers";
// import { getUserId } from "../utils/helpers";
APP_SECRET;

const getUser = (token) => {
  try {
    if (token) {
      return jwt.verify(token, APP_SECRET);
    }
    return null;
  } catch (err) {
    return null;
  }
};

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
