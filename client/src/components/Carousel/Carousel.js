import React, { useState } from "react";
import styled from "@emotion/styled";

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
    image: "https://res.cloudinary.com/dfbyrhgyx/image/upload/v1591752322/hero-links-awakening_sfgrtc.jpg"
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

const CarouselContainer = styled.div`
display: none;
color: #fff;

@media screen and (min-width: 768px) {
  display: block;
  /* max-width: 1440px;
  height: 586px;
  max-height: 600px;
  margin: 0 1em;
  overflow: hidden; */
}

@media screen and (min-width: 1440px) {
  margin: 0 1em;
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

@media screen and (min-width: 1440px) {
  top: 120px;
}
`

const CarouselSlideTitle = styled.h2`
  position: relative;
  margin: 0;
  font-family: "Fira Sans", sans-serif;
  font-size: calc(1em + (3vw - 0.3vmin));
  font-weight: 700;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 1440px) {
    font-size: 3.5em;
  }
`

const CarouselSlideSubtitle = styled.h3`
  position: relative;
  margin: 0;
  color: #d2d2d4;
  font-family: "Fira Sans", sans-serif;
  font-size: calc(0.5em + (3vw - 0.5vmin));
  font-weight: 600;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 1440px) {
    font-size: 2.8em;
  }
`

const CarouselSlideDeveloper = styled.span`
  margin-top: 0.5em;
  color: #f9b2c8;
  font-family: Vollkorn, Georgia, "Times New Roman", Times, serif;
  font-size: calc(1em + (1vw - 0.6vmin));
  font-style: italic;

  @media screen and (min-width: 1440px) {
    font-size: 1.5em;
  }
`
const CarouselSlideDateAndPlatforms = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.5em;
`

const CarouselSlideDate = styled.span`
margin-right: 1em;
font-weight: 600;
`

const CarouselSlidePlatform = styled.span`
margin-right: 0.5em;
padding: 3px 12px;
border-radius: 0.25em;
background: #951010;
font-size: 0.875em;
font-weight: 600;
`

const CarouselSlideAddToSelectMenu = styled.select`
width: min-content;
height: 40px;
margin-top: calc(1em + (1.3vw - 0.6vmin));
padding: 10px 0 11px 15px;
border: 0;
border-radius: 4px;
background-color: #fff;
background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"), linear-gradient(155.35deg, #1fee7e -28.1%, #2386bd 119.81%);
background-repeat: no-repeat, repeat;
background-position: right 1.3em top 50%, 0 0;
background-size: .65em auto, 100%;
color: #fff;
font-family: "Open Sans", sans-serif;
appearance: none;

&:hover {
  cursor: pointer;
}

@media screen and (min-width: 1440px) {
  margin-top: 2em;
}
`
const CarouselSlideAddToSelectMenuOptions = styled.option`
  padding-right: 1em;
  color: #666;
  font-size: 1.2em;
`

const CarouselControls = styled.div``;

const showAddToMenu = () => {
  return (
    <CarouselSlideAddToSelectMenu>
      <CarouselSlideAddToSelectMenuOptions value="" hidden>Add to</CarouselSlideAddToSelectMenuOptions>
      <CarouselSlideAddToSelectMenuOptions value="1">Collection</CarouselSlideAddToSelectMenuOptions>
      <CarouselSlideAddToSelectMenuOptions value="2">Owned Games</CarouselSlideAddToSelectMenuOptions>
    </CarouselSlideAddToSelectMenu>
  )
}

const CarouselSlide = ({slide}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const CarouselSlideListItem = styled.div`
  position: relative;
  /* left: 0; */
  /* width: 100%; */
  /* max-width: 1440px; */
  height: 0;
  padding-top: calc((614 / 1440) * 100%);
  overflow: hidden;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%),url(${slide.image}) no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 150px #000;
`;

  console.log(slide)
  return (
    <CarouselSlideListItem>
      <CarouselSlideInfo>
        <CarouselSlideTitle>
          {slide.title}
        </CarouselSlideTitle>
        <CarouselSlideSubtitle>
          {slide.subtitle ? slide.subtitle : null}
        </CarouselSlideSubtitle>
        <CarouselSlideDeveloper>
          {slide.developer}
        </CarouselSlideDeveloper>
        <CarouselSlideDateAndPlatforms>
        <CarouselSlideDate>
          {slide.releaseDate}
        </CarouselSlideDate>
        {slide.platforms.map(platform => ( <CarouselSlidePlatform title={platform.full}>{platform.short}</CarouselSlidePlatform> ))}
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
