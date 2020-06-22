import React from "react";
import { Link, useParams } from "react-router-dom";
// import { GameCardContainer, GameCardText } from "./GameCard.styles";
import styled from "@emotion/styled";

const GameCardContainer = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #e2e2e4;
  background-color: transparent;
  font-size: 0.875em;
  border: 0;
  line-height: 1.5;

  @media (min-width: 768px) {
    /* width: 223px; */
    font-size: 1em;
  }
`;

const GameArt = styled.img`
  margin-right: 1em;
  margin-bottom: 0.5em;
  width: 100%;
  border-radius: 0.25em;
  object-fit: cover;

  @media (min-width: 768px) {
  }
`;

// these styles are needed to crop the
// text to two lines add an ellipsis at the end.
const GameTitle = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
  font-weight: 600;
`;

// these styles do the same as above, but
// crop to one line.
const GameDeveloper = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #858d95;
`;

const GameCard = (props) => {
  const { id } = props;
  return (
    <GameCardContainer className="game-card" to={`/games/${id}`}>
      <GameArt className="game-card__artwork" src={props.img} />
      <GameTitle className="game-card__title">{props.title}</GameTitle>
      <GameDeveloper className="game-card__developer">
        {props.developer}
      </GameDeveloper>
    </GameCardContainer>
  );
};

export default GameCard;
