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
  users(parent, args, { db }, info) {
    return db.users;
  },
  reviews(parent, args, { db }, info) {
    return db.reviews;
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
  genres(parent, args, ctx, info) {
    return db.genres;
  },
  async ratings(parent, args, ctx, info) {
    return await ctx.prisma.ratings.findMany();
  },
  async rating(parent, { id }, ctx, info) {
    // return db.ratings;
    return await ctx.prisma.ratings.findOne({
      where: {
        id: Number(id),
      },
    });
  },
};
