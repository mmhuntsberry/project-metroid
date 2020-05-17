import { GraphQLServer } from "graphql-yoga";

// typeDefs (schema)
const typeDefs = `
  type Query {
    hello: String!
    greeting(name: String): String!
    game: Game!
    games: [Game!]!
    user: User!
    users: [User!]!
  }

  type Game {
    id: ID!
    title: String!
    releaseYear: Int
    platform: String!
    rating: Float
    src: String

  }

   type User {
    id: ID!
    name: String!
    email: String
    collection: [Game!]!
  }
 `;

const games = [
  {
    id: "1",
    title: "E.T.",
    platform: "Atari",
    rating: 1.0,
  },
  {
    id: "2",
    title: "Super Mario Bros.",
    platform: "Nintendo(nes)",
    rating: 5.0,
  },
  {
    id: "3",
    title: "Ninja Gaiden",
    platform: "Nintendo(nes)",
    rating: 5.0,
  },
];

const users = [
  {
    id: "11",
    name: "Mike",
    email: "mike@gmail.com",
    collection: ["2"],
  },
  {
    id: "12",
    name: "Steve",
    email: "steve@gmail.com",
    collection: ["3", "1"],
  },
  {
    id: "13",
    name: "Buttercup",
    email: "buttercup@gmail.com",
    collection: [],
  },
];

// resolvers
const resolvers = {
  Query: {
    hello() {
      return `This is my first query!`;
    },
    greeting(parent, { name }, ctx, info) {
      return name ? `Hello, ${name}!` : `Hi Stranger!`;
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
    games(parent, args, ctx, info) {
      return games;
    },
    user() {
      return {
        id: "11",
        name: "Mike",
        email: "mike@gmail.com",
      };
    },
    users() {
      return users;
    },
  },
  User: {
    collection(parent, args, ctx, info) {
      const results = [];

      // TODO: Refactor this!!!
      for (let i = 0; i < parent.collection.length; i++) {
        for (let j = 0; j < games.length; j++) {
          const id = parent.collection[i];
          const gameID = games[j].id;
          // console.log(gameID, j);
          console.log(id, i);
          // console.log(id);
          // console.log(gameID);
          if (id === gameID) {
            // console.log(games[j]);
            results.push(games[j]);
          }
        }
      }
      console.log(results);
      return results;
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
