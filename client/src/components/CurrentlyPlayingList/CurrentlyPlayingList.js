import React from "react";
import {
  ContentWrapper,
  ListWrapper,
  CurrentlyPlayingTitle,
  GameList,
  GameContainer,
  GameArt,
  GameInfoContainer,
  GameTitle,
  GamePlatform,
  GameStartDate,
  UpdateStatus,
} from "./CurrentlyPlayingList.styles";


const CurrentlyPlayingList = (props) => {



  return <ContentWrapper className="currently-playing-wrapper" currentlyPlaying={props.currentlyPlaying}>
    <ListWrapper>
      <CurrentlyPlayingTitle>Currently Playing:</CurrentlyPlayingTitle>
      <GameList>
        {props.currentlyPlaying.map(game => {

          function formatDate(dateVal, obj) {
            if (dateVal) {
              return new Date(dateVal).toLocaleDateString("en-US", obj);
            } else {
              return new Date().toLocaleDateString("en-US", obj);
            }
          }

          // get the current year to compare with the year
          // the game was started during
          let thisYear = formatDate(null, {year: "numeric"});
          let startedOnYear = formatDate(game.startedOn, {year: "numeric"});
          const startedThisYear = thisYear !== startedOnYear;
          
          const options = {}
          // if we started in another year, include the year
          startedThisYear && (options.year = "numeric");
          options.month = "long";
          options.day = "numeric";

          const startDate = formatDate(game.startedOn, options);
          
          return (
            <GameContainer key={game.title}>
              <GameArt src={game.boxArt}></GameArt>
              <GameInfoContainer>
                <GameTitle>{game.title}</GameTitle>
                <GamePlatform>{game.platform}</GamePlatform>
                <GameStartDate>Started on {startDate}</GameStartDate>
                <UpdateStatus>Update Status</UpdateStatus>
              </GameInfoContainer>
            </GameContainer>
            )
        })}
      </GameList>
    </ListWrapper>
  </ContentWrapper>
};

export default CurrentlyPlayingList;
