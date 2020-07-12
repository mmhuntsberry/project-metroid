import { reduceFilter } from "../../utils/helpers.js";

export const Theme = {
  async games(parent, args, ctx, info) {
    const games = await ctx.prisma.games.findMany();
    const gameThemes = await ctx.prisma.game_theme.findMany();

    const filteredThemes = games.reduce((filtered, curr) => {
      gameThemes.filter((item) => {
        if (parent.id === item.theme_id) {
          if (curr.id === item.game_id) {
            filtered.push(curr);
          }
        }
      });

      return filtered;
    }, []);

    return filteredThemes.map((p) => p);
  },
};
