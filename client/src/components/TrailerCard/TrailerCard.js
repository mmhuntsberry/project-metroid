import React from "react";
// import { GameCardContainer, GameCardText } from "./GameCard.styles";
import styled from "@emotion/styled";
import "../../styles/base/variables.css"
import playButton from "../../assests/play-button-overlay.svg";

const TrailerCardContainer = styled.a`
display: flex;
position: relative;
flex-direction: column;
width: 100%;
border: 0;
background-color: transparent;
color: #e2e2e4;
font-size: var(--body-font-size-02);
line-height: 1.5;
text-decoration: none;

@media (min-width: 768px) {
  font-size: var(--body-font-size-03);
}
`;

const ThumbnailOverlay = styled.div`
  position: relative;
`


const Thumbnail = styled.img`
  width: 100%;
  margin-right: var(--spacing-04);
  margin-bottom: var(--spacing-02);
  border-radius: var(--spacing-01);
  object-fit: cover;
`;

const PlayButtonContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0.85em;
  left: 0;
  transition: opacity 200ms ease-out;
  border-radius: var(--spacing-01);
  opacity: 0.25;
  background: #0006 url(${playButton}) no-repeat center center;
  background-size: var(--layout-03);

  &:hover {
    opacity: 1;
  }
`
const TrailerTitle = styled.span`
  font-weight: 600;
`;

const TrailerCreator = styled.span`
  color: var(--grey-02);
`;

const TrailerCard = (props) => {
  return (
    <TrailerCardContainer href="#">
      <ThumbnailOverlay>
        <Thumbnail src={props.thumbnail} />
        <PlayButtonContainer />
      </ThumbnailOverlay>
      <TrailerTitle className="card-truncate--two-lines">{props.title}</TrailerTitle>
      <TrailerCreator className="card-truncate--one-line">
        {props.creator}
      </TrailerCreator>
    </TrailerCardContainer>
  );
};

export default TrailerCard;
