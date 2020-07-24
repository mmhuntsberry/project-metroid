import React from "react";
import "../../db/Browse";
import {
  BrowseContainer,
  BackgroundImage,
  TitleDiv,
  CustomTitle,
  CustomTitleWithCarrot,
  ButtonContainer,
  ByTitle,
} from "./Browse.styles";
import "./Browse.styles";
import {
  browse_platform,
  browse_genre,
  browse_theme,
  browse_keyword,
  browse_decade,
  browse_rating,
  makePlatformBtn,
  makeGenreBtn,
  makeThemeBtn,
  makeKeywordBtn,
  makeDecadeBtn,
  makeRatingBtn,
} from "../../db/Browse";

const Browse = () => {
  

  //functions in client/src/db/Browse
  

  return (
    <BrowseContainer>
      <BackgroundImage />
      <TitleDiv>
        Browse
        <CustomTitle>customize</CustomTitle>
        <CustomTitleWithCarrot>Customize&gt;</CustomTitleWithCarrot>
      </TitleDiv>

      <ButtonContainer>
        <ByTitle>By Platform</ByTitle>
        {browse_platform.map(makePlatformBtn, this)}
      </ButtonContainer>

      <ButtonContainer>
        <ByTitle>By Genre</ByTitle>
        {browse_genre.map(makeGenreBtn, this)}
      </ButtonContainer>

      <ButtonContainer>
        <ByTitle>By Theme</ByTitle>
        {browse_theme.map(makeThemeBtn, this)}
      </ButtonContainer>

      <ButtonContainer>
        <ByTitle>By Keyword</ByTitle>
        {browse_keyword.map(makeKeywordBtn, this)}
      </ButtonContainer>

      <ButtonContainer>
        <ByTitle>By Decade</ByTitle>
        {browse_decade.map(makeDecadeBtn, this)}
      </ButtonContainer>

      <ButtonContainer>
        <ByTitle>By Rating</ByTitle>
        {browse_rating.map(makeRatingBtn, this)}
      </ButtonContainer>
      
    </BrowseContainer>
  );
};

export default Browse;
