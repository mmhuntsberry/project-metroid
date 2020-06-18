import styled from "@emotion/styled";
import "../../styles/base/variables.css"

const CardRow = styled.div `
  display: grid;
  grid-gap: var(--spacing-04);
  grid-template-columns: repeat(5, 1fr);
  margin: 0 var(--spacing-04);
  overflow-x: auto;
`;

const CardRowGrid = styled.div `
  display: grid;
  grid-gap: var(--spacing-04);
  grid-template-columns: repeat(2, 1fr);
  margin: 0 var(--spacing-04);

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    max-width: var(--max-breakpoint);
  }
`
const TrailerCardRowGrid = styled.div`
  display: grid;
  grid-gap: var(--spacing-04);
  grid-template-columns: repeat(1, 1fr);
  margin: 0 var(--spacing-04);

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    max-width: var(--max-breakpoint);
  }
`

const RowTitle = styled.h2 `
  width: max-content;
  margin-top: var(--spacing-07);
  margin-bottom: var(--spacing-02);
  margin-left: var(--spacing-04);
  color: #28c7b7;
  font-size: var(--title-font-size-06);
  font-weight: 500;
  line-height: 1.6;

  @media (min-width: 768px) {
    margin-top: var(--spacing-08);
    font-size: var(--title-font-size-07);
  }
`;

export {
    CardRow,
    CardRowGrid,
    TrailerCardRowGrid,
    RowTitle
};