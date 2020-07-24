import * as jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { APP_SECRET, getUserId } from "../../utils/helpers.js";

export const Mutation = {
  async signup(parent, args, context, info) {
    // 1
    const password = await bcrypt.hash(args.password, 10);
    console.log("password", password);
    // 2
    const user = await context.prisma.users.create({
      data: { ...args, password },
    });

    // 3
    const token = jwt.sign({ userId: user.id }, APP_SECRET);

    // 4
    return {
      token,
      user,
    };
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
};
