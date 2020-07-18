export const Query = {
  async games(parent, args, ctx, info) {
    return await ctx.prisma.games.findMany();
  },
  async game(parent, { id }, ctx, info) {
    return await ctx.prisma.games.findOne({
      where: {
        id: Number(id),
      },
    });
  },
  async user(parent, { id }, ctx, info) {
    return await ctx.prisma.users.findOne({
      where: {
        id: Number(id),
      },
    });
  },
  users(parent, args, ctx, info) {
    return ctx.prisma.users.findMany();
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
    console.log("Hi");
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
