import styled from "@emotion/styled";
import "../../styles/base/variables.css"

const CardRow = styled.div `
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 1em;
  overflow-x: auto;
`;

const CardRowGrid = styled.div `
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 1em;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    max-width: var(--max-breakpoint);
  }
`

const RowTitle = styled.h2 `
  width: max-content;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  color: #28c7b7;
  font-size: 1.5em;
  font-weight: 500;
  line-height: 1.6;

  @media (min-width: 768px) {
    margin-top: 3.5rem;
    font-size: 2em;
  }
`;

export {
    CardRow,
    CardRowGrid,
    RowTitle
};