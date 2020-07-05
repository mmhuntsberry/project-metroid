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
  async theme(parent, { id }, ctx, info) {
    const themes = await ctx.prisma.themes.findMany();
    const games = await ctx.prisma.game_theme.findMany();

    const filiteredThemes = themes.reduce((filtered, curr) => {
      games.filter((item) => {
        if (parent.id === item.game_id) {
          if (curr.id === item.theme_id) {
            filtered.push(curr);
          }
        }
      });

      return filtered;
    }, []);

    return filiteredThemes.map((theme) => theme);
  },
  async genre(parent, args, ctx, info) {
    // return reduceFilter(parent.genre, db.genres);
    const genres = await ctx.prisma.genres.findMany();
    const games = await ctx.prisma.game_genre.findMany();

    const filiteredGenres = genres.reduce((filtered, curr) => {
      games.filter((item) => {
        if (parent.id === item.game_id) {
          if (curr.id === item.genre_id) {
            filtered.push(curr);
          }
        }
      });

      return filtered;
    }, []);

    return filiteredGenres.map((theme) => theme);
  },
};
