import { mq } from "../utilities/breakpoints.js";
import styled from "@emotion/styled";

export const CardRowGrid = styled.div`
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
