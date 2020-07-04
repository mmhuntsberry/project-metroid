import styled from "@emotion/styled";
import "../../styles/base/variables.css"
import { mq } from "../../styles/utilities/breakpoints.js";
import { Link } from "react-router-dom";

const GameCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 0;
  background-color: transparent;
  color: var(--grey-01);
  font-size: var(--body-font-size-02);
  line-height: 1.5;

  ${mq[2]} {
    font-size: var(--body-font-size-03);
  }
`;

const GameArt = styled.img`
  width: 100%;
  margin-right: var(--spacing-04);
  margin-bottom: var(--spacing-02);
  border-radius: var(--spacing-01);
  object-fit: cover;
`;

// these styles are needed to crop the
// text to two lines add an ellipsis at the end.
const GameTitle = styled.span`
  font-weight: var(--font-weight-bold);
`;

// these styles do the same as above, but
// crop to one line.
const GameDeveloper = styled.span`
  color: var(--grey-02);
`;

export { GameCardContainer, GameArt, GameTitle, GameDeveloper };
