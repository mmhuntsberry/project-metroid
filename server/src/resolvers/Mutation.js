export const Mutation = {
  async createUser(parent, { data }, ctx, info) {
    const { username, email, first_name, last_name, password } = data;

    const emailExists = await ctx.prisma.users.findOne({
      where: {
        email,
      },
    });

    const usernameExists = await ctx.prisma.users.findOne({
      where: {
        username,
      },
    });

    if (!emailExists || !username) {
      return await ctx.prisma.users.create({
        data: {
          username,
          first_name,
          last_name,
          email,
          password,
        },
      });
    } else {
      throw new Error("Email or Username already exits choose another");
    }
  },
  createGame(parent, { title, platform, rating }, { db }, info) {},
  createReview(parent, { user, review, game }, { db }, info) {},
};
