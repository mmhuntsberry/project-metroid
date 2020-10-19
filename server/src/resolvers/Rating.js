import { reduceFilter } from "../../utils/helpers.js";

export const Rating = {
  async games(parent, args, ctx, info) {
    const games = await ctx.prisma.games.findMany();
    const gameRatings = await ctx.prisma.game_rating.findMany();

    const filteredRating = games.reduce((filtered, curr) => {
      gameRatings.filter((item) => {
        if (parent.id === item.rating_id) {
          if (curr.id === item.game_id) {
            filtered.push(curr);
          }
        }
      });

      return filtered;
    }, []);

    return filteredRating.map((p) => p);
  },
};
