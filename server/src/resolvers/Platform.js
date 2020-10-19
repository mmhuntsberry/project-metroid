import { reduceFilter } from "../../utils/helpers.js";

export const Platform = {
  async games(parent, args, ctx, info) {
    const games = await ctx.prisma.games.findMany();
    const gamePlatforms = await ctx.prisma.game_platform.findMany();

    const filteredPlatform = games.reduce((filtered, curr) => {
      gamePlatforms.filter((item) => {
        if (parent.id === item.platform_id) {
          if (curr.id === item.game_id) {
            filtered.push(curr);
          }
        }
      });

      return filtered;
    }, []);

    return filteredPlatform.map((p) => p);
  },
};
