import styled from "@emotion/styled";
import "../../styles/base/variables.css";
import { mq } from "../../styles/utilities/breakpoints.js";

const PageWrapper = styled.div`
  padding-top: var(--spacing-09);
`;

const DashboardBoardBodyContainer = styled.div`
  margin: 0 var(--spacing-04);

  ${mq[6]} {
    margin: 0;
  }
`;

const CardRow = styled.div`
  display: grid;
  grid-gap: var(--spacing-04);
  grid-template-columns: repeat(5, 1fr);
  overflow-x: auto;
`;

const CardRowGrid = styled.div`
  display: grid;
  grid-gap: var(--spacing-04);
  grid-template-columns: repeat(2, 1fr);

  ${mq[1]} {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  ${mq[3]} {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
`;

const TrailerCardRowGrid = styled.div`
  display: grid;
  grid-gap: var(--spacing-04);
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    max-width: var(--max-breakpoint);
  }
`;

const RowTitle = styled.h2`
  width: max-content;
  margin-top: var(--spacing-07);
  margin-bottom: var(--spacing-02);
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
  PageWrapper,
  DashboardBoardBodyContainer,
  CardRow,
  CardRowGrid,
  TrailerCardRowGrid,
  RowTitle,
};
