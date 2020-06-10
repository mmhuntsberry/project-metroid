import { reduceFilter } from "../../utils/helpers.js";

export const Theme = {
  games(parent, args, { db }, info) {
    return reduceFilter(parent.games, db.games);
  },
};
