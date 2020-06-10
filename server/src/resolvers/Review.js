export const Review = {
  user(parent, args, { db }, info) {
    const filtered = db.users.filter((user) => user.id === parent.user);

    return filtered[0];
  },
};
