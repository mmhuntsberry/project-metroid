import React, { FunctionComponent } from "react";
import {
  Hero,
  HeroImage,
  HeroTextContainer,
  HeroTitle,
  HeroDetails,
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
        <img src={game.box_art} />
      </div>
    ))
  );
};

export default GamePage;
