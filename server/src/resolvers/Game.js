import { reduceFilter } from "../../utils/helpers.js";

export const Game = {
  async reviews(parent, args, ctx, info) {
    const reviews = await ctx.prisma.reviews.findMany();
    const games = await ctx.prisma.game_review.findMany();

    const filteredReviews = reviews.reduce((filtered, curr) => {
      games.filter((item) => {
        if (parent.id === item.game_id) {
          if (curr.id === item.review_id) {
            filtered.push(curr);
          }
        }
      });

      return filtered;
    }, []);

    return filteredReviews.map((review) => review);
  },
  async rating(parent, args, ctx, info) {
    console.log("parent", parent);
    const rating = await ctx.prisma.game_rating
      .findOne({
        where: { game_id: parent.id },
      })
      .then((data) => {
        console.log("data", data);
        return ctx.prisma.ratings.findOne({
          where: {
            id: data.rating_id,
          },
        });
      });

    console.log("rating", rating);
    return rating;
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
  async platform(parent, args, ctx, info) {
    const platforms = await ctx.prisma.platforms.findMany();
    const games = await ctx.prisma.game_platform.findMany();

    const filteredPlatforms = platforms.reduce((filtered, curr) => {
      games.filter((item) => {
        if (parent.id === item.game_id) {
          if (curr.id === item.platform_id) {
            filtered.push(curr);
          }
        }
      });
      return filtered;
    }, []);
    return filteredPlatforms.map((platform) => platform);
  },
};
