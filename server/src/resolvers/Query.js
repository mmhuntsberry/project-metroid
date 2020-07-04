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
  themes(parent, args, ctx, info) {
    return db.themes;
  },
  platforms(parent, args, ctx, info) {
    return db.platforms;
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
