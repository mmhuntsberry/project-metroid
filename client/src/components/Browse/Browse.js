import React from "react";
import "../../db/Browse";
import {
  BrowseContainer,
  BackgroundImage,
  TitleDiv,
  CustomTitle,
  CustomTitleWithCarrot,
  BrowseBtn,
  ButtonContainer,
  ByTitle,
} from "./Browse.styles";
import "./Browse.styles";
import { browse_platform, browse_genre, browse_theme, browse_keyword } from "../../db/Browse";

const Browse = () => {
  function makePlatformBtn(browse_platform) {
    return <BrowseBtn>{browse_platform.platform}</BrowseBtn>;
  }

  function makeGenreBtn(browse_genre) {
    return <BrowseBtn>{browse_genre.genre}</BrowseBtn>;
  }

  function makeThemeBtn(browse_theme) {
    return <BrowseBtn>{browse_theme.theme}</BrowseBtn>;
  }

  function makeKeywordBtn(browse_keyword) {
    return <BrowseBtn>{browse_keyword.keyword}</BrowseBtn>;
  }

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
    </BrowseContainer>
  );
};

export default Browse;
