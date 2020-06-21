import { reduceFilter } from "../../utils/helpers.js";

export const Game = {
  reviews(parent, args, { db }, info) {
    return reduceFilter(parent.reviews, db.reviews);
  },
  rating(parent, args, { db }, info) {
    return reduceFilter(parent.rating, db.ratings);
  },
  theme(parent, args, { db }, info) {
    return reduceFilter(parent.theme, db.themes);
  },
};
