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
  themes(parent, ctx, { db }, info) {
    return db.themes;
  },
  platforms(parent, ctx, { db }, info) {
    return db.platforms;
  },
  genres(parent, ctx, { db }, info) {
    return db.genres;
  },
  ratings(parent, ctx, { db }, info) {
    return db.ratings;
  },
};
