import { GraphQLServer } from "graphql-yoga";
import { uuid } from "uuidv4";
import { games } from "../db/games.js";
import { users } from "../db/users.js";
import { reviews } from "../db/reviews.js";
import { themes } from "../db/themes.js";

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
    theme: Theme!
    themes: [Theme!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
    createGame(title: String!, platform: String!, rating: Float): Game!
    createReview(review: String!, published: Boolean!, game: ID!, user: ID!): Review!
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
    collection: [Game]
    reviews: [Review]
  }

  type Theme {
    id: ID!
    type: String!
    games: [Game]
  }
 `;

// resolvers
const resolvers = {
  Query: {
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
    theme() {
      return {
        id: uuid(),
        type: "Platform",
        games: ["2", "3"],
      };
    },
    themes() {
      return themes;
    },
  },
  Mutation: {
    createUser(parent, args, ctx, info) {
      const emailTaken = users.some((user) => args.email === user.email);

      if (emailTaken) {
        throw new Error("Email taken");
      }

      const user = {
        id: uuid(),
        name: args.name,
        email: args.email,
        collection: [],
        reviews: [],
      };

      users.push(user);
      return user;
    },
    createGame(parent, args, ctx, info) {
      const titleTaken = games.some((game) => game.title === args.title);
      const platformTaken = games.some(
        (game) => game.platform === args.platform
      );

      if (titleTaken && platformTaken) {
        throw new Error("Game already exists");
      }

      const game = {
        id: uuid(),
        title: args.title,
        platform: args.platform,
        rating: args.rating || 0,
        reviews: [],
      };

      games.push(game);
      return game;
    },
    createReview(parent, args, ctx, info) {
      const userExists = users.some((user) => user.id === args.user);

      if (!userExists) {
        throw new Error("User not found");
      }

      const review = {
        id: uuid(),
        review: args.review,
        game: args.game,
        user: args.user,
      };

      const findUser = users.find((user) => user.id === args.user);
      const findGame = games.find((game) => game.id === args.game);

      findUser.reviews.push(review.id);
      findGame.reviews.push(review.id);
      reviews.push(review);

      return review;
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

      return filtered[0];
    },
  },
  Theme: {
    games(parent, args, ctx, info) {
      console.log(parent);
      return parent.games.reduce((filtered, id) => {
        games.filter((game) => {
          if (game.id === id) {
            filtered.push(game);
          }
        });

        return filtered;
      }, []);
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
