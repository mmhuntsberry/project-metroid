import React from "react";
import { InfoCardContainer, InfoCardText } from "./InfoCard.styles";
import "./infocard.css";

const InfoCard = (props) => {
  return (
    <InfoCardContainer>
      <i className={`info-card__icon ${props.icon}`}></i>
      <InfoCardText>{props.copy}</InfoCardText>
    </InfoCardContainer>
  );
};

export default InfoCard;
