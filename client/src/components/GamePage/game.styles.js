import styled from "@emotion/styled";
import { mq } from "../../styles/utilities/breakpoints.js";

export const Hero = styled.div`
  position: relative;
  border: 0;
`;

export const HeroImage = styled.div`
  width: 100%;
  height: 540px;
  object-fit: cover;
  background: linear-gradient(to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgb(23, 24, 36, .5) 50%,
    rgb(23, 24, 36, 1) 100%),
    url("${({ image }) => image}")
    no-repeat;
  background-size: cover;
  box-shadow: inset 0 7px 9px -7px #000;

  
  ${mq[2]} {
    
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  align-items: baseline;
  margin-left: 16px;

  ${mq[1]} {
    margin-left: 62px;
  }

  ${mq[2]} {
    margin-left: 124px;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0;
  color: var(--white);
  font-size: calc(1em + (3vw - 0.3vmin));

  font-weight: var(--weight);
`;

export const HeroDetails = styled.span`
  display: none;
  margin: 0;
  margin-left: 24px;
  color: var(--white);
  color: #979797;
  font-size: 20px;
  font-weight: var(--weight);
 
  ${mq[2]} {
    display: block;
  }

  &:nth-of-type(1)::after {
    content: "";
    padding-right: 24px;
    border-right: 2px solid #979797;
  }
  

`;

export const BodyContainer = styled.div`
  display: grid;
  margin-left: 16px;
  color: var(--white);
  line-height: 1.5;

  ${mq[1]} {
    margin-left: 62px;
  }
  
  ${mq[2]} {
    grid-template-columns: 1fr 3fr;
    margin-left: 124px;
  }
`;

export const BoxArt = styled.img`
  margin-top: 24px;
  border-radius: 25px;
`;

export const GameDetailsContainer = styled.div`
  margin-top: 24px;
`;

export const GameSynopsis = styled.p``;

export const GameDescription = styled.p`
  margin-top: 24px;
`;

export const GameTrailer = styled.video``;
