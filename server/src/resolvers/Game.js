import { reduceFilter } from "../../utils/helpers.js";

export const Game = {
  reviews(parent, args, { db }, info) {
    return reduceFilter(parent.reviews, db.reviews);
  },
  async rating(parent, args, ctx, info) {
    return await ctx.prisma.game_rating
      .findOne({
        where: { game_id: parent.id },
      })
      .then((data) => {
        return ctx.prisma.ratings.findOne({
          where: {
            id: data.rating_id,
          },
        });
      });
  },
  theme(parent, args, { db }, info) {
    return reduceFilter(parent.theme, db.themes);
  },
  genre(parent, args, { db }, info) {
    return reduceFilter(parent.genre, db.genres);
  },
};
