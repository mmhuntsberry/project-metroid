import styled from "@emotion/styled";
import "../../styles/base/variables.css";
import { mq } from "../../styles/utilities/breakpoints.js";

const SearchBarContainer = styled.div`
  display: block;
  position: relative;
  grid-area: 2 / 1 / 2 / -1;
  width: 100%;
  min-width: 295px;
  padding: var(--spacing-04);
  padding: 0;
  background-color: var(--dark-blue);

  ${mq[2]} {
    grid-area: 1 / 3 / 1 / -1;
  }

  ${mq[3]} {
    grid-area: 2 / 1 / 2 / -1;
  }

  ${mq[4]} {
    grid-area: 1 / 2;
  }
`;

// search icon requires pixel-perfect positioning
const SearchBarIcon = styled.svg`
  display: block;
  position: absolute;
  top: 0;
  left: var(--spacing-04);
  width: var(--body-font-size-02);
  height: 100%;
  color: var(--pink);
`;

const SearchBar = styled.input`
  width: 100%;
  height: var(--toolbar-height);
  padding-left: var(--spacing-08);
  border: 0;
  border-radius: var(--spacing-01);
  background-color: var(--foreground-dark-blue);
  color: var(--pink);
  font-size: var(--body-font-size-03);
  font-weight: var(--font-weight-normal);
  letter-spacing: 0.31px;

  &:hover {
    background-color: var(--foreground-lighter-dark-blue);
  }

  &::placeholder {
    opacity: 0.5;
    color: var(--pink);
  }
`;

export { SearchBarContainer, SearchBarIcon, SearchBar };
