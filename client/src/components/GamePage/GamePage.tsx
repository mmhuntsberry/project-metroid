import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import {
  Hero,
  HeroImage,
  HeroTextContainer,
  HeroTitle,
  HeroDetails,
  BoxArt,
  BodyContainer,
  GameDetailsContainer,
  GameDescription,
  GameSynopsis,
  GameTrailer,
  GameSidebar,
  GameInfo,
  GameRating,
  GameGenre,
  GamePlatform,
  GameTheme,
  InfoContainer,
  GameInfoTitle,
  ReviewsContainer,
  SectionContainer,
  SectionTitle,
  SectionLink,
} from "./GamePage.styles.js";
import { CardRowGrid } from "../Dashboard/Dashboard.styles.js";
import GameCard from "../GameCard/GameCard";
import Review from "../Review/Review";
import { GameModel } from "../../models";
import { intersperse } from "../../utils/helpers.js";
import { reviews } from "../../db/reviews.js";
import { default as popularGameCardData } from "../Dashboard/popularGameCardData.json";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { useQuery } from "@apollo/react-hooks";

interface Props {
  data: IData;
}

interface IData {
  loading: boolean;
  game: GameModel;
}

const GamePage: FunctionComponent<Props> = (props: Props) => {
  const { id } = useParams();

  // const id = "3";
  const { loading, error, data } = useQuery(GET_GAME, {
    variables: { id },
  });
  if (loading) return "Loading...";
  if (error) return "Error..."

  console.log(data);
  const { game } = data;
  return (
    <div className="game-page">
      <Hero>
        <HeroTextContainer>
          <HeroTitle>{game.title}</HeroTitle>
          <HeroDetails>{game.release_year}</HeroDetails>
          <HeroDetails>{game.developer}</HeroDetails>
        </HeroTextContainer>
        <HeroImage image={game.hero} />
      </Hero>
      <BodyContainer>
        <GameSidebar>
          <BoxArt src={game.box_art} />
          <GameInfo>
            <InfoContainer>
              <GameInfoTitle>Rating:</GameInfoTitle>
              {console.log(game)}
              <GameRating>{game.rating.rating} / 5</GameRating>
            </InfoContainer>
            <InfoContainer>
              <GameInfoTitle>Platform:</GameInfoTitle>
              <GamePlatform>{game.platform}</GamePlatform>
            </InfoContainer>
            <InfoContainer>
              <GameInfoTitle>Theme:</GameInfoTitle>
              {console.log("theme", game.theme)}
              <GameGenre>{intersperse(game.theme, ", ")}</GameGenre>
            </InfoContainer>
            <InfoContainer>
              <GameInfoTitle>Genre:</GameInfoTitle>
              <GameTheme>{intersperse(game.genre, ", ")}</GameTheme>
            </InfoContainer>
          </GameInfo>
        </GameSidebar>
        <GameDetailsContainer>
          <GameSynopsis>{game.synopsis}</GameSynopsis>
          <GameDescription>{game.description}</GameDescription>
          <GameTrailer
            src={game.trailer}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></GameTrailer>
          <SectionContainer>
            <SectionTitle>Popular reviews</SectionTitle>
            <SectionLink>More</SectionLink>
          </SectionContainer>
          <ReviewsContainer>
            {reviews.map((review) => (
              <Review key={review.id} userReview={review} />
            ))}
          </ReviewsContainer>
          <SectionContainer>
            <SectionTitle>Popular Games</SectionTitle>
            <SectionLink>More</SectionLink>
          </SectionContainer>
          <CardRowGrid>
            {popularGameCardData.slice(2).map((card) => (
              <GameCard
                class="popular__game"
                key={card.id}
                img={card.img}
                title={card.title}
                developer={card.developer}
              />
            ))}
          </CardRowGrid>
        </GameDetailsContainer>
      </BodyContainer>
    </div>
  );
};

const GET_GAME = gql`
  query Game($id: ID!) {
    game(id: $id) {
      id
      title
      platform
      release_year
      box_art
      synopsis
      description
      trailer
      hero
      developer
      rating {
        rating
      }
      genre {
        type
      }
      theme {
        type
      }
      reviews {
        review
      }
    }
  }
`;

export default graphql(GET_GAME)(GamePage);
