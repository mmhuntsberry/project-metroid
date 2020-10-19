import { reduceFilter } from "../../utils/helpers.js";

export const User = {
  // collection(parent, args, { db }, info) {
  //   return reduceFilter(parent.collection, db.games);
  // },
  async reviews(parent, args, ctx, info) {
    return await ctx.prisma.users
      .findOne({ where: { id: parent.id } })
      .reviews();
  },
};
