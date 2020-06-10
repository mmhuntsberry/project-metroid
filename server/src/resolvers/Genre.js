import { reduceFilter } from "../../utils/helpers.js";

export const Genre = {
  games(parent, args, { db }, info) {
    return reduceFilter(parent.games, db.games);
  },
};
