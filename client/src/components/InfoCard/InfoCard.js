import React from "react";
import { InfoCardContainer, InfoCardText } from "./InfoCard.styles";
import "./infocard.css";

const InfoCard = (props) => {
  return (
    <InfoCardContainer>
      <InfoCardText>{props.copy}</InfoCardText>
    </InfoCardContainer>
  );
};

export default InfoCard;
