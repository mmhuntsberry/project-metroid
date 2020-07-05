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
    // return reduceFilter(parent.theme, db.themes);
    // return await ctx.prisma.game_theme
    //   .findMany({
    //     where: { game_id: parent.id },
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     return ctx.prisma.themes.findMany({
    //       where: {
    //         id: data.theme_id,
    //       },
    //     });
    //   });
    const themes = await ctx.prisma.themes.findMany();
    const games = await ctx.prisma.game_theme.findMany();
    console.log(id);
    console.log("themes", themes);
    console.log("games", games);
    const filiteredThemes = themes.reduce((filtered, curr) => {
      console.log("curr", curr);
      games.filter((item) => {
        console.log("itme", item);
        if (parent.id === item.game_id) {
          if (curr.id === item.theme_id) {
            filtered.push(curr);
          }
        }
      });

      return filtered;
    }, []);

    console.log("filiteredThemes", filiteredThemes);
    return filiteredThemes.map((theme) => theme);
  },
  genre(parent, args, ctx, info) {
    return reduceFilter(parent.genre, db.genres);
  },
};
