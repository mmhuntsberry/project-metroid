import { getUserId } from "../../utils/helpers";

export const Query = {
  async games(parent, args, ctx, info) {
    // uncomment this to require auth on specific queries
    // const userId = getUserId(ctx);

    const userId = "hello";

    if (!userId) {
      throw new Error("You are not Authenticated.");
    } else {
      return await ctx.prisma.games.findMany();
    }
  },
  async game(parent, { id }, ctx, info) {
    const game = await ctx.prisma.games.findOne({
      where: {
        id,
      },
    });
    return game;
  },
  async user(parent, args, ctx, info) {
    const userId = getUserId(ctx);

    if (!userId) {
      throw new Error("You are not Authenticated.");
    }

    return ctx.prisma.users.findOne({ where: { id: userId } });
  },
  async users(parent, args, ctx, info) {
    return await ctx.prisma.users.findMany();
  },
  async review(parent, { id }, ctx, info) {
    return await ctx.prisma.reviews.findOne({
      where: {
        id: Number(id),
      },
    });
  },
  async reviews(parent, args, ctx, info) {
    return await ctx.prisma.reviews.findMany();
  },
  async theme(parent, { id }, ctx, info) {
    return await ctx.prisma.themes.findOne({
      where: {
        id: Number(id),
      },
    });
  },
  async themes(parent, { id }, ctx, info) {
    return await ctx.prisma.themes.findMany();
  },
  async platform(parent, { id }, ctx, info) {
    return await ctx.prisma.platforms.findOne({
      where: {
        id: Number(id),
      },
    });
  },
  async platforms(parent, args, ctx, info) {
    return await ctx.prisma.platforms.findMany();
  },
  async genre(parent, args, ctx, info) {
    return await ctx.prisma.ratings.findOne({
      where: {
        id: Number(id),
      },
    });
  },
  async genres(parent, args, ctx, info) {
    return await ctx.prisma.genres.findMany();
  },
  async ratings(parent, args, ctx, info) {
    return await ctx.prisma.ratings.findMany();
  },
  async rating(parent, { id }, ctx, info) {
    return await ctx.prisma.ratings.findOne({
      where: {
        id: Number(id),
      },
    });
  },
};
