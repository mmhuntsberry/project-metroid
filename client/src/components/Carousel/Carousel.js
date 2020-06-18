import React, { useState } from "react";
import {
  CarouselSlideAddToSelectMenuOptions,
  CarouselSlideAddToSelectMenu,
  CarouselSlidePlatform,
  CarouselSlideDate,
  CarouselSlideDateAndPlatforms,
  CarouselSlideDeveloper,
  CarouselSlideSubtitle,
  CarouselSlideTitle,
  CarouselSlideInfo,
  CarouselContainer,
  CarouselSlideListItem,
} from "./carousel.styles";
import CarouselSlideData from "../../db/CarouselSlideData";

const showAddToMenu = () => {
  return (
    <CarouselSlideAddToSelectMenu>
      <CarouselSlideAddToSelectMenuOptions value="" hidden>
        Add to
      </CarouselSlideAddToSelectMenuOptions>
      <CarouselSlideAddToSelectMenuOptions value="1">
        Collection
      </CarouselSlideAddToSelectMenuOptions>
      <CarouselSlideAddToSelectMenuOptions value="2">
        Owned Games
      </CarouselSlideAddToSelectMenuOptions>
    </CarouselSlideAddToSelectMenu>
  );
};

const CarouselSlide = ({ slide }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // eslint-disable-line no-unused-vars

  return (
    <CarouselSlideListItem>
      <CarouselSlideInfo>
        <CarouselSlideTitle>{slide.title}</CarouselSlideTitle>
        <CarouselSlideSubtitle>
          {slide.subtitle ? slide.subtitle : null}
        </CarouselSlideSubtitle>
        <CarouselSlideDeveloper>{slide.developer}</CarouselSlideDeveloper>
        <CarouselSlideDateAndPlatforms>
          <CarouselSlideDate>{slide.releaseDate}</CarouselSlideDate>
          {slide.platforms.map((platform) => (
            <CarouselSlidePlatform title={platform.full} color={platform.short} key={platform.full}>
              {platform.short}
            </CarouselSlidePlatform>
          ))}
        </CarouselSlideDateAndPlatforms>
        {isLoggedIn ? showAddToMenu() : null}
      </CarouselSlideInfo>
    </CarouselSlideListItem>
  );
};

const Carousel = () => {
  return (
    <CarouselContainer>
        {CarouselSlideData.map((slide, i) => {
          return <CarouselSlide slide={slide} key={i} />;
        })}
    </CarouselContainer>
  );
};

export default Carousel;
