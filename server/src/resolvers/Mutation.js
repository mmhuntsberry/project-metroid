import * as jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
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
  async createGame(parent, { data }, ctx, info) {
    const id = uuidv4();

    const foundRating = await ctx.prisma.ratings.findOne({
      where: {
        rating: data.rating.toString(),
      },
    });

    const foundGenre = await ctx.prisma.genres.findOne({
      where: {
        genre: data.genre,
      },
    });

    const foundPlatform = await ctx.prisma.platforms.findOne({
      where: {
        platform: data.platform,
      },
    });

    const foundTheme = await ctx.prisma.themes.findOne({
      where: {
        theme: data.theme,
      },
    });

    const newGame = await ctx.prisma.games.create({
      data: {
        id,
        title: data.title,
        release_year: data.release_year,
        box_art: data.box_art,
        synopsis: data.synopsis,
        description: data.description,
        trailer: data.trailer,
        hero: data.hero,
        developer: data.developer,
      },
    });

    const connectGameToRatings = await ctx.prisma.game_rating.create({
      data: {
        ratings: {
          connect: { id: foundRating.id },
        },
        games: { connect: { id: newGame.id } },
      },
    });

    const connectGameToPlatforms = await ctx.prisma.game_platform.create({
      data: {
        platforms: {
          connect: { id: foundPlatform.id },
        },
        games: { connect: { id: newGame.id } },
      },
    });

    const connectGameToThemes = await ctx.prisma.game_theme.create({
      data: {
        themes: {
          connect: { id: foundTheme.id },
        },
        games: { connect: { id: newGame.id } },
      },
    });

    const connectGameToGenress = await ctx.prisma.game_genre.create({
      data: {
        genres: {
          connect: { id: foundGenre.id },
        },
        games: { connect: { id: newGame.id } },
      },
    });

    return newGame;
  },
};
