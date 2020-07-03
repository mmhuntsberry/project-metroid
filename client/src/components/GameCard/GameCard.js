import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { GameCardContainer, GameArt, GameTitle, GameDeveloper } from "./GameCard.styles";


const GameCard = (props) => {
  const { id } = props;
  return (
    <GameCardContainer className="game-card" to={`/games/${id}`}>
      <GameArt className="game-card__artwork" src={props.img} />
      <GameTitle className="game-card__title card-truncate--two-lines">{props.title}</GameTitle>
      <GameDeveloper className="game-card__developer card-truncate--one-line">
        {props.developer}
      </GameDeveloper>
    </GameCardContainer>
  );
};

export default GameCard;
