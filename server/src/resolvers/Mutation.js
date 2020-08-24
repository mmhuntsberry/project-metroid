import * as jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { APP_SECRET, getUserId } from "../../utils/helpers.js";

export const Mutation = {
  async signup(parent, args, ctx, info) {
    console.log(args);
    // check if email already exists in db
    const emailExists = await ctx.prisma.users.findOne({
      where: {
        email: args.email,
      },
    });

    // check if username already exists
    const usernameExists = await ctx.prisma.users.findOne({
      where: {
        username: args.username,
      },
    });

    if (!emailExists || !usernameExists) {
      // has the users password
      const password = await bcrypt.hash(args.password, 10);

      // create new user in the db
      const user = await ctx.prisma.users.create({
        data: { ...args, password },
      });

      const token = jwt.sign({ userId: user.id }, APP_SECRET);

      // return the AuthPayload
      return {
        token,
        user,
      };
    } else {
      throw new Error("Email or Username already exits choose another");
    }
  },
  async login(parent, args, ctx, info) {
    const user = await ctx.prisma.users.findOne({
      where: {
        email: args.email,
      },
    });

    console.log("USER", user);

    if (!user) {
      throw new Error("No user found.");
    }

    const validUser = await bcrypt.compare(args.password, user.password);
    if (!validUser) {
      throw new Error("Invalid password.");
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET);

    return {
      token,
      user,
    };
  },
  async createReview(parent, { user, review, game }, ctx, info) {
    const userId = getUserId(ctx);

    const newReview = await ctx.prisma.reviews.create({
      data: {
        user_review: { connect: { user_id: userId, review_id: review.id } },
        review,
        // game_review: { connect: { game_id: Number(game) } },
      },
    });

    return newReview;
  },
  async createGame(parent, args, ctx, info) {
    console.log(args);
  },
};
