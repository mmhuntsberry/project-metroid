import styled from "@emotion/styled";
import { mq } from "../../styles/utilities/breakpoints";
import caret from "../../assets/image-background-landing-hero-button.svg";

const CarouselContainer = styled.div`
  display: none;
  color: var(--white);

  ${mq[2]} {
    display: block;
  }
`;

const CarouselSlideList = styled.ul`
  position: relative;
  margin: 0;
  list-style: none;
`;

const CarouselSlideInfo = styled.div`
  display: flex;
  position: absolute;
  z-index: 100;
  top: calc(15% + (10vw - 8vmax));
  left: 10%;
  flex-direction: column;
  width: 80%;

  ${mq[6]} {
    top: var(--layout-07);
  }
`;

const CarouselSlideTitle = styled.h2`
  position: relative;
  margin: 0;
  font-family: var(--body-font-family-primary);
  font-size: calc(1em + (3vw - 0.3vmin));
  font-weight: var(--font-weight-bolder);
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);

  ${mq[6]} {
    font-size: var(--title-font-size-12);
  }
`;

const CarouselSlideSubtitle = styled.h3`
  position: relative;
  margin: 0;
  color: var(--grey-01);
  font-family: var(--body-font-family-primary);
  font-size: calc(0.8em + (3vw - 1vmin));
  font-weight: var(--font-weight-bold);
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);

  ${mq[6]} {
    font-size: var(--title-font-size-11);
  }
`;

const CarouselSlideDeveloper = styled.span`
  margin-top: var(--spacing-02);
  color: var(--dark-theme-bg-tertiary);
  font-family: var(--body-font-family-primary);
  font-size: calc(1em + (1vw - 1vmin));
  font-style: var(--emphasized);
  text-transform: uppercase;

  ${mq[6]} {
    font-size: var(--title-font-size-06);
  }
`;
const CarouselSlideDateAndPlatforms = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: var(--spacing-02);
`;

const CarouselSlideDate = styled.span`
  margin-right: var(--spacing-04);
  font-weight: var(--font-weight-bold);
`;

const CarouselSlidePlatform = styled.span`
  margin-right: var(--spacing-02);
  padding: var(--spacing-01) var(--spacing-03);
  border-radius: 0.25em;
  background: ${(props) => `var(--platform-${props.color.toLowerCase()})`};
  font-size: var(--body-font-size-02);
  font-weight: var(--font-weight-bold);
`;

const CarouselSlideAddToSelectMenu = styled.select`
  width: var(--layout-10);
  height: 40px;
  margin-top: calc(1em + (1.3vw - 0.6vmin));
  padding: var(--spacing-02) 0 var(--spacing-02) var(--spacing-04);
  border: 0;
  border-radius: 4px;
  background-color: var(--white);
  background-image: url(${caret}),
    linear-gradient(155.35deg, #1fee7e -28.1%, #2386bd 119.81%);
  background-repeat: no-repeat, repeat;
  background-position: right 1.3em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  color: var(--white);
  appearance: none;

  &:hover {
    cursor: pointer;
  }

  ${mq[6]} {
    margin-top: var(--spacing-07);
  }
`;

const CarouselSlideAddToSelectMenuOptions = styled.option`
  color: var(--grey-03);
  font-size: var(--body-font-size-05);
`;

const CarouselControls = styled.div``;

const CarouselSlideListItem = styled.div`
  position: relative;
  z-index: 0;
  height: 0;
  padding-top: calc((614 / 1440) * 100%);
  overflow: hidden;
  background: linear-gradient(to bottom left,
  rgba(0, 0, 0, 0.2) 0%,
  rgb(23, 24, 36, 0.3) 50%,
  rgb(23, 24, 36, 0.8) 100%),
    url("https://res.cloudinary.com/dfbyrhgyx/image/upload/v1591752322/hero-links-awakening_sfgrtc.jpg")
    no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 150px #000;
`;

export {
  CarouselControls,
  CarouselSlideAddToSelectMenuOptions,
  CarouselSlideAddToSelectMenu,
  CarouselSlidePlatform,
  CarouselSlideDate,
  CarouselSlideDateAndPlatforms,
  CarouselSlideDeveloper,
  CarouselSlideSubtitle,
  CarouselSlideTitle,
  CarouselSlideInfo,
  CarouselSlideList,
  CarouselContainer,
  CarouselSlideListItem,
};
