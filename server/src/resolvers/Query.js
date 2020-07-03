export const Query = {
  async games(parent, args, ctx, info) {
    console.log(ctx);
    return await ctx.prisma.games.findMany();
  },
  game(parent, { id }, { db }, info) {
    const findGame = db.games.find((game) => game.id === id);
    return findGame;
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
