import { reduceFilter } from "../../utils/helpers.js";

export const Game = {
  reviews(parent, args, { db }, info) {
    return reduceFilter(parent.reviews, db.reviews);
  },
  rating(parent, args, { db }, info) {
    console.log("parent", parent.rating);
    console.log("db", db.ratings);
    return reduceFilter(parent.rating, db.ratings);
  },
};
