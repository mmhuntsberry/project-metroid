export const Review = {
  // TODO finish implementing the
  async game(parent, args, ctx, info) {
    const games = await ctx.prisma.games.findMany();
    const gameReviews = await ctx.prisma.game_review.findMany();

    const filteredReview = games.reduce((filtered, curr) => {
      gameReviews.filter((item) => {
        if (parent.id === item.review_id) {
          if (curr.id === item.game_id) {
            filtered.push(curr);
          }
        }
      });

      return filtered;
    }, []);

    return filteredReview.map((g) => g);
  },
};
