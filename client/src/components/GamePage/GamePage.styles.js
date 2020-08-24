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

`;

export const HeroTextContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  align-items: baseline;
  justify-content: space-between;
  margin-left: 16px;

  ${mq[3]} {
    margin-left: calc(var(--layout-07) + var(--spacing-01));
  }
`;

export const HeroTitle = styled.h1`
  margin: 0;
  color: var(--white);
  font-size: calc(1em + (3vw - 0.3vmin));
  font-weight: var(--font-weight-light);
`;

export const HeroDetails = styled.span`
  display: none;
  margin: 0;
  margin-left: var(--spacing-06);
  color: var(--grey-05);
  font-size: var(--body-font-size-05);

  ${mq[2]} {
    display: block;
  }

  &:nth-of-type(1)::after {
    content: "";
    padding-right: var(--spacing-06);
    border-right: 2px solid #979797;
  }
`;

export const BodyContainer = styled.div`
  display: grid;
  grid-gap: var(--spacing-05);
  margin-right: var(--spacing-04);
  margin-left: var(--spacing-04);
  color: var(--white);

  ${mq[3]} {
    grid-template-columns: 1fr 3fr;
    margin-left: calc(var(--layout-07) + var(--spacing-01));
  }
`;

export const BoxArt = styled.img`
  margin-top: var(--spacing-06);
  border-radius: 25px;
`;

export const GameDetailsContainer = styled.div`
  margin-top: var(-spacing-06);
  margin-right: var(-spacing-05);

  ${mq[2]} {
    margin: 0 var(-spacing-05);
  }

  ${mq[6]} {
    margin: 0;
  }
`;

export const GameSynopsis = styled.p`
  line-height: 1.6;
`;

export const GameDescription = styled.p`
  margin-top: var(-spacing-06);
  line-height: 1.6;
`;

export const GameTrailer = styled.iframe`
  width: 100%;
  height: 320px;
  border: 0;

  ${mq[2]} {
    height: 640px;
  }
`;

export const GameSidebar = styled.div``;

export const GameActionWdiget = styled.div``;

export const GameInfo = styled.div`
  margin-top: var(--spacing-06);
  color: var(--white);
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-gap: var(--spacing-04) var(--spacing-02);
  grid-template-columns: auto 1fr;
  align-items: baseline;
  padding-bottom: var(--spacing-03);
`;

export const GameInfoTitle = styled.h4`
  display: inline;
  margin: 0;
  color: var(--dark-theme-bg-quaternary);
  font-weight: var(--font-weight-light);
`;

// TODO Refactor to be more reusable
// FROM HERE =====
export const GameRating = styled.span`
  justify-self: end;
  color: var(--dark-theme-bg-tertiary);
  font-size: var(--body-font-size-05);
`;

export const GameGenre = styled.span`
  justify-self: end;
  color: var(--dark-theme-bg-tertiary);
`;

export const GameTheme = styled.span`
  justify-self: end;
  color: var(--dark-theme-bg-tertiary);
`;

export const GamePlatform = styled.div`
  justify-self: end;
  color: var(--dark-theme-bg-tertiary);
`;
// TO HERE

export const ReviewsContainer = styled.div``;

export const SectionContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: var(--spacing-08);
  margin-bottom: var(--spacing-08);
  border-bottom: 1px solid var(--white);
`;

export const SectionTitle = styled.h3`
  margin-bottom: var(--spacing-02);
  color: var(--dark-theme-bg-secondary);
  font-weight: var(--font-weight-light);
`;

export const SectionLink = styled.a`
  color: var(--dark-theme-bg-quaternary);
  text-transform: uppercase;
`;
