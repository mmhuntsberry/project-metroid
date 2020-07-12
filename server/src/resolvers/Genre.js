import { reduceFilter } from "../../utils/helpers.js";

export const Genre = {
  async games(parent, args, ctx, info) {
    // return reduceFilter(parent.games, db.games);
    const games = await ctx.prisma.games.findMany();
    const gameGenres = await ctx.prisma.game_genre.findMany();

    const filteredGenre = games.reduce((filtered, curr) => {
      gameGenres.filter((item) => {
        if (parent.id === item.genre_id) {
          if (curr.id === item.game_id) {
            filtered.push(curr);
          }
        }
      });

      return filtered;
    }, []);

    return filteredGenre.map((g) => g);
  },
};
