import { GraphQLServer } from "graphql-yoga";
import { games } from "../db/games.js";
import { users } from "../db/users.js";
import { reviews } from "../db/reviews.js";

// typeDefs (schema)
const typeDefs = `
  type Query {
    hello: String!
    greeting(name: String): String!
    game: Game!
    games: [Game!]!
    user: User!
    users: [User!]!
    reviews: [Review!]!
  }

  type Game {
    id: ID!
    title: String!
    releaseYear: Int
    platform: String!
    rating: Float
    src: String
    reviews: [Review!]!

  }

  type Review {
    id: ID!
    review: String!
    game: Game!
    user: User!
  }

   type User {
    id: ID!
    name: String
    email: String
    collection: [Game!]!
    reviews: [Review]!
  }
 `;

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
    reviews() {
      return reviews;
    },
  },
  User: {
    collection({ collection }, args, ctx, info) {
      return collection.reduce((filtered, id) => {
        games.filter((game) => {
          if (game.id === id) {
            filtered.push(game);
          }
        });
        return filtered;
      }, []);
    },

    // TODO
    // Doesn't return the reviews under users query
    reviews(parent, args, ctx, info) {
      return parent.reviews.reduce((filtered, id) => {
        reviews.filter((review) => {
          if (review.author === id) {
            filtered.push(review);
          }
        });

        return filtered;
      }, []);
    },
  },
  // Working
  Game: {
    reviews(parent, args, ctx, info) {
      return parent.reviews.reduce((filtered, id) => {
        reviews.filter((review) => {
          if (review.id === id) {
            filtered.push(review);
          }
        });
        return filtered;
      }, []);
    },
  },

  Review: {
    user(parent, args, ctx, info) {
      const filtered = users.filter((user) => user.id === parent.user);
      console.log("filtered", filtered[0]);

      return filtered[0];
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
