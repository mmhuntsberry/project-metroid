import styled from "@emotion/styled";
import "../../styles/base/variables.css";
import { mq } from "../../styles/utilities/breakpoints.js";

const PageWrapper = styled.div`
  padding-top: var(--spacing-09);
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

export { PageWrapper, RowTitle };