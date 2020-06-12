import React, { useState } from "react";
import {
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
} from "./carousel.styles";

const slideData = [
  {
    title: "The Legend of Zelda:",
    subtitle: "Link's Awakening",
    developer: "Nintendo EAD",
    releaseDate: "6th June, 1993",
    platforms: [
      {
        short: "GB",
        full: "Game Boy",
      },
    ],
    image:
      "https://res.cloudinary.com/dfbyrhgyx/image/upload/v1591752322/hero-links-awakening_sfgrtc.jpg",
  },
  // {
  //   title: "Sable",
  //   developer: "Shedworks",
  //   releaseDate: "TBA 2020",
  //   platforms: [{ short: "PC", full: "PC (Microsoft Windows)" }],
  //   image:
  //     "https://images.igdb.com/igdb/image/upload/t_original/osbobxdd1v8jbmnfwckc.png",
  // },
  // {
  //   title: "Sea of Solitude",
  //   developer: "Jo-Mei Games",
  //   releaseDate: "5th July 2019",
  //   platforms: [
  //     { short: "PC", full: "PC (Microsoft Windows)" },
  //     { short: "PS4", full: "Playstation 4" },
  //     { short: "XB1", full: "Xbox One" },
  //   ],
  //   image:
  //     "https://images.igdb.com/igdb/image/upload/t_original/hvqse5m1zyxn6cs3kgqn.png",
  // },
  // {
  //   title: "The Pathless",
  //   developer: "Giant Squid",
  //   releaseDate: "TBA 2020",
  //   platforms: [
  //     { short: "PC", full: "PC (Microsoft Windows)" },
  //     { short: "PS4", full: "Playstation 4" },
  //     { short: "MAC", full: "Mac OS X" },
  //   ],
  //   image: "https://images.igdb.com/igdb/image/upload/t_original/sc6dbm.png",
  // },
  // {
  //   title: "Super Mario Maker 2",
  //   developer: "Nintendo EPD",
  //   releaseDate: "28th June, 2019",
  //   platforms: [{ short: "NSW", full: "Nintendo Switch" }],
  //   image: "https://images.igdb.com/igdb/image/upload/t_original/sc635s.png",
  // },
];

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
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
            <CarouselSlidePlatform title={platform.full}>
              {platform.short}
            </CarouselSlidePlatform>
          ))}
        </CarouselSlideDateAndPlatforms>
        {isLoggedIn ? showAddToMenu() : null}
      </CarouselSlideInfo>
      {/* <CarouselSlideImage src={slide.image} /> */}
    </CarouselSlideListItem>
  );
};

const Carousel = () => {
  return (
    <CarouselContainer>
      {/* <CarouselSlideList> */}
      {slideData.map((slide, i) => {
        return <CarouselSlide slide={slide} key={i} />;
      })}
      {/* </CarouselSlideList> */}
    </CarouselContainer>
  );
};

export default Carousel;
