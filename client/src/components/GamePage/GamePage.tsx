import React, { FC } from "react";
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
} from "./game.styles.js";
import Game from "../../models";
import { intersperse } from "../../utils/helpers.js";

type Props = {
  game: Game;
};

const GamePage: FC = ({ game }: Props) => {
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
            src="https://www.youtube.com/embed/QLYyWAqTTAo"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </GameTrailer>
          <SectionContainer>
            <SectionTitle>Popular reviews</SectionTitle>
            <SectionLink>More</SectionLink>
          </SectionContainer>
          {/* <ReviewsContainer>
          </ReviewsContainer> */}
        </GameDetailsContainer>
      </BodyContainer>
    </div>
  );
};

export default GamePage;
