import styled from "@emotion/styled";
import "../../styles/base/variables.css";
import { mq } from "../../styles/utilities/breakpoints.js";

const ContentWrapper = styled.div`
display: grid;
grid-row: 1 / 1;
width: 100%;
margin-bottom: var(--spacing-07);
border-radius: var(--spacing-01);
color: var(--grey-01);
letter-spacing: 0.31px;

${mq[3]} {
  padding: var(--spacing-04);
  background-color: var(--foreground-dark-blue);
}
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const CurrentlyPlayingTitle = styled.h5`
  margin: 0;
  padding: 0;
  font-size: var(--body-font-size-02);
  font-weight: var(--font-weight-normal);
`

const GameList = styled.div`
  display: grid;
  grid-gap: var(--spacing-03);
  grid-template-columns: 1fr;
  margin-top: var(--spacing-02);

  @media screen and (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mq[3]} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const GameContainer = styled.div`
  display: flex;
  padding: var(--spacing-03);
  border-radius: var(--spacing-01);
  background-color: var(--foreground-dark-blue);

  ${mq[3]} {
    background-color: var(--foreground-lighter-dark-blue);
  }
`

// Game Art width and height look good at this size at any breakpoint
const GameArt = styled.img`
  width: 104px;
  height: 139px;
  border-radius: var(--spacing-01);
  object-fit: cover;
`

const GameInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 var(--spacing-03);
`

const GameTitle = styled.span`
  margin-bottom: 0.375rem;
  color: var(--white);
`

const GamePlatform = styled.span`
  margin-bottom: 0.375rem;
  color: var(--grey-02);
  font-size: var(--body-font-size-02);
  font-style: italic;
`

const GameStartDate = styled.span`
  margin-bottom: var(--spacing-03);
  color: var(--grey-01);
  font-size: var(--body-font-size-01);
`

const UpdateStatus = styled.button`
  width: min-content;
  height: var(--layout-03);
  padding: var(--spacing-01) var(--spacing-03);
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