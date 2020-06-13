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
} from "./game.styles.js";
import { games } from "../../db/games.js";

const GamePage: FunctionComponent = () => {
  return (
    games.map((game) => (
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
          <BoxArt src={game.box_art} />
          <GameDetailsContainer>
            <GameSynopsis>
              {game.synopsis}
            </GameSynopsis>
            <GameDescription>
              {game.description}
            </GameDescription>
            <iframe
              width="100%"
              height="640"
              src="https://www.youtube.com/embed/QLYyWAqTTAo"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>;
          </GameDetailsContainer>
        </BodyContainer>
      </div>
    ))
  );
};

export default GamePage;
