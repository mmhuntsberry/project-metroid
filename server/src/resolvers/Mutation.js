export const Mutation = {
  createUser(parent, { data }, ctx, info) {
    const { name, email } = data;
    const emailTaken = ctx.prisma.users.some((user) => email === user.email);
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
