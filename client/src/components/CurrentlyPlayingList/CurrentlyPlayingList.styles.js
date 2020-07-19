import styled from "@emotion/styled";
import "../../styles/base/variables.css";
import { mq } from "../../styles/utilities/breakpoints.js";

const ContentWrapper = styled.div`
display: grid;
width: 100%;
padding: 1rem;
padding-bottom: ${(props) => props.currentlyPlaying ? "2rem" : "1rem"};
border-bottom: 1px solid #38384e;
border-radius: 0.25rem;
border-radius: ${(props) => props.currentlyPlaying ? "0.25rem 0.25rem 0 0" : "0.25rem"};
background-color: #212131;
color: #bbb;
letter-spacing: 0.31px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const CurrentlyPlayingTitle = styled.h5`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 400;
`

const GameList = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 8px;
`

const GameContainer = styled.div`
  display: flex;
  padding: 12px;
  border-radius: 4px;
  background-color: #28283c;
`

const GameArt = styled.img`
  width: 104px;
  border-radius: 4px;
`

const GameInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
`

const GameTitle = styled.span`
  margin-bottom: 6px;
  color: #fff;
`

const GamePlatform = styled.span`
  margin-bottom: 6px;
  color: #777;
  font-size: 14px;
  font-style: italic;
`

const GameStartDate = styled.span`
  margin-bottom: 12px;
  color: #bbb;
  font-size: 12px;
`

const UpdateStatus = styled.button`
  width: min-content;
  height: 36px;
  padding: 4px var(--spacing-03);
  transition: background-color 200ms;
  border: 0;
  border-radius: var(--spacing-01);
  background-color: var(--dim-green);
  color: var(--white);
  font-size: var(--body-font-size-02);
  white-space: nowrap;

  &:hover {
    background-color: var(--green);
    cursor: pointer;
  }
`;

export { ContentWrapper, ListWrapper, CurrentlyPlayingTitle, GameList, GameContainer, GameArt, GameInfoContainer, GameTitle, GamePlatform, GameStartDate, UpdateStatus };