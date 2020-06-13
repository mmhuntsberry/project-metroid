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
  background: linear-gradient(to bottom left,
    rgba(0, 0, 0, 0.5) 0%,
    rgb(23, 24, 36, 0.5) 50%,
    rgb(23, 24, 36, 1) 100%),
    url("${({ image }) => image}")
    no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 150px #000;
  
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
  &:nth-of-type(1)::after {
    content: "";
    border-right: 2px solid #979797;
    padding-right: 24px;
  }
  
  display: none;
  margin: 0;
  color: var(--white);
  font-size: 20px;
  font-weight: var(--weight);
  color: #979797;
  margin-left: 24px;

  ${mq[2]} {
   display: block; 
  }

`;
