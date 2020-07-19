export const Mutation = {
  async createUser(parent, args, ctx, info) {
    const { data } = args;
    const { username, email, first_name, last_name, password } = data;

    const emailExists = await ctx.prisma.users.findOne({
      where: {
        email: args.data.email,
      },
    });

    const usernameExists = await ctx.prisma.users.findOne({
      where: {
        username: args.data.username,
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
  // createGame(parent, { title, platform, rating }, { db }, info) {
  //   const titleTaken = db.games.some((game) => game.title === title);
  //   const platformTaken = db.games.some((game) => game.platform === platform);

  //   if (titleTaken && platformTaken) {
  //     throw new Error("Game already exists");
  //   }

  //   const game = {
  //     id: uuid(),
  //     title,
  //     platform,
  //     rating: rating || 0,
  //     reviews: [],
  //   };

  //   db.games.push(game);
  //   return game;
  // },
  // createReview(parent, { user, review, game }, { db }, info) {
  //   const userExists = db.users.some((u) => u.id === user);

  //   if (!userExists) {
  //     throw new Error("User not found");
  //   }

  //   const newReview = {
  //     id: uuid(),
  //     review,
  //     game,
  //     user,
  //   };

  //   const findUser = db.users.find((u) => u.id === user);
  //   const findGame = db.games.find((g) => g.id === game);

  //   findUser.reviews.push(newReview.id);
  //   findGame.reviews.push(newReview.id);
  //   db.reviews.push(newReview);

  //   return newReview;
  // },
};
