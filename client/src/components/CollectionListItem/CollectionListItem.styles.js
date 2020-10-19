import styled from "@emotion/styled";
import "../../styles/base/variables.css";
import { mq } from "../../styles/utilities/breakpoints.js";
import { animated } from 'react-spring'

const CollectionItem = styled.div``;

const CollectionContainer = styled.div`
  display: flex;
  grid-gap: var(--spacing-04);
  padding: var(--spacing-03);
  border-radius: var(--spacing-01);
  background-color: var(--foreground-dark-blue);
  color: var(--grey-01);

  ${mq[2]} {
    background-color: var(--foreground-lighter-dark-blue);
  }
`;

const CollectionThumbnail = styled.img`
  width: var(--layout-04);
  height: var(--layout-05);
  object-fit: cover;
  border-radius: var(--spacing-01);

  ${mq[2]} {
    width: 75px;
    height: 100px;
  }
`;

const CollectionInfoContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

const CollectionMetaAndTitle = styled.div`
  display: flex;
  grid-gap: var(--spacing-01);
  flex-direction: column;
  flex-grow: 1;

  ${mq[2]} {
    grid-gap: var(--spacing-02);
  }
`;

const CollectionTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: var(--body-font-size-03);
  font-weight: var(--font-weight-bold);
  line-height: 120%;

  ${mq[2]} {
    font-size: var(--body-font-size-05);
  }
`;

const CollectionMetaInfo = styled.div`
  display: flex;
  grid-gap: var(--spacing-02);
  flex-direction: column;
  padding-top: var(--spacing-01);
  color: var(--grey-02);
  font-size: var(--body-font-size-02);

  ${mq[1]} {
    grid-gap: var(--spacing-04);
    flex-direction: row;
  }

  ${mq[2]} {
    font-size: var(--body-font-size-03);
  }
`;

const CollectionGames = styled.span`
  display: flex;
  grid-gap: var(--spacing-02);
  align-items: center;
`;

const CollectionGamesText = styled.span``;

const CollectionComments = styled.span`
  display: ${(props) => (props.isMain ? "none" : "flex")};
  grid-gap: var(--spacing-02);
  align-items: center;
`;

const CollectionCommentsText = styled.span``;

const CollectionControlsDropdownArrowContainer = styled.button`
  display: block;
  align-self: flex-start;
  margin-right: calc(-1 * var(--spacing-01));
  padding: var(--spacing-03);
  transform: rotate(0deg);
  transition: transform 100ms;
  border: 0;
  background-color: transparent;

  &.clicked {
    transform: rotate(180deg);
  }

  &[disabled] {
    opacity: var(--disabled);
    pointer-events: none;
  }

  &:focus,
  &:active {
    box-shadow: none;
  }

  ${mq[2]} {
    display: none;
  }
`;

const CollectionControlsDropdownArrow = styled.svg`
  color: var(--grey-01);
  pointer-events: none;
`;

const CollectionControlsContainer = styled.div`
  display: none;

  ${mq[2]} {
    display: flex;
    grid-gap: var(--spacing-02);
    margin: 0 var(--spacing-02);
  }
`;

const CollectionControlContainer = styled.button`
  display: flex;
  grid-gap: var(--spacing-02);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: var(--layout-05);
  padding: 0;
  border: 0;
  border-radius: var(--spacing-01);
  background-color: transparent;
  color: var(--grey-01);

  &:hover {
    background-color: #2f2f47;
  }

  &[disabled] {
    opacity: var(--disabled);
    pointer-events: none;
  }
`;

const CollectionControlIcon = styled.svg`
  pointer-events: none;
`;

const CollectionControlText = styled.span`
  pointer-events: none;
`;

// display: ${(props) => (props.drawerIsOpen ? "block" : "none")};

const CollectionControlsDropdownList = styled(animated.ul)`
  margin: 0;
  padding: 0;
  border-radius: 0 0 var(--spacing-01) var(--spacing-01);
  background-color: var(--foreground-dark-blue);
  color: var(--grey-01);
  list-style: none;
  will-change: maxHeight;

  ${mq[2]} {
    display: none;
  }
`;

const CollectionControlsDropdownListItem = styled.li`
  padding: var(--spacing-03) var(--spacing-04);
  border-top: 1px solid var(--dim-grey-line);

  &.delete {
    color: var(--red);
  }

  &:hover {
    background-color: var(--foreground-lighter-dark-blue);
    cursor: pointer;
  }
`;

export {
  CollectionItem,
  CollectionContainer,
  CollectionThumbnail,
  CollectionInfoContainer,
  CollectionMetaAndTitle,
  CollectionTitle,
  CollectionMetaInfo,
  CollectionGames,
  CollectionGamesText,
  CollectionComments,
  CollectionCommentsText,
  CollectionControlsDropdownArrowContainer,
  CollectionControlsDropdownArrow,
  CollectionControlsContainer,
  CollectionControlContainer,
  CollectionControlIcon,
  CollectionControlText,
  CollectionControlsDropdownList,
  CollectionControlsDropdownListItem,
}