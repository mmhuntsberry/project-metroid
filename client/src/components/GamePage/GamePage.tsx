import React, { FunctionComponent } from "react";
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
} from "./Game.styles.js";
import { CardRowGrid } from "../Dashboard/Dashboard.styles.js";
import GameCard from "../GameCard/GameCard";
import Review from "../Review/Review";
import { GameModel } from "../../models";
import { intersperse } from "../../utils/helpers.js";
import { reviews } from "../../db/reviews.js";
import { useParams } from "react-router-dom";
import { default as popularGameCardData } from "../Dashboard/popularGameCardData.json";

interface Props {
  game: GameModel;
}

interface RouteParams {
  id: string;
}

const GamePage: FunctionComponent<Props> = (props: Props) => {
  const { game } = props;
  const params = useParams<RouteParams>();

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
              <GameRating>{game.rating} / 10</GameRating>
            </InfoContainer>
            <InfoContainer>
              <GameInfoTitle>Platform:</GameInfoTitle>
              <GamePlatform>{game.platform}</GamePlatform>
            </InfoContainer>
            <InfoContainer>
              <GameInfoTitle>Theme:</GameInfoTitle>
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
              <Review userReview={review} />
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

export default GamePage;
