import React from "react";
import { PageWrapper } from "../Dashboard/Dashboard.styles";
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

import dayjs from "dayjs";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(advancedFormat)


const CurrentlyPlayingList = (props) => {



  return <ContentWrapper currentlyPlaying={props.currentlyPlaying}>
    <ListWrapper>
      <CurrentlyPlayingTitle>Currently Playing:</CurrentlyPlayingTitle>
      <GameList>
        {props.currentlyPlaying.map(game => {

          // get the current year so we can add the year to the
          // start date for the currently played game if it was 
          // started in another year
          let thisYear = new Date();
          thisYear = dayjs(thisYear).format("YYYY");
          const startedThisYear = thisYear === dayjs(game.startedOn).format("YYYY")
          const startDate = startedThisYear ? dayjs(game.startedOn).format("MMMM Do") : dayjs(game.startedOn).format("MMMM Do, YYYY");
          
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
