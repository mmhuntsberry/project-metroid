import styled from "@emotion/styled";
import "../../styles/base/variables.css";
import { mq } from "../../styles/utilities/breakpoints.js";

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: var(--layout-05);
  margin: var(--spacing-04);
  padding: 0 var(--spacing-06);
  border: 0;
  border-radius: var(--spacing-01);
  background-color: var(--foreground-dark-blue);
  color: var(--grey-01);
  line-height: 1.5;

  @media screen and (min-width: 375px) {
    flex-direction: row;
  }

  ${mq[6]} {
    margin: var(--spacing-04) 0;
  }
`;

const NoticeText = styled.p`
  justify-content: flex-start;
  
  @media screen and (min-width: 375px) {
    margin-right: var(--spacing-04);
  }
`;

const NoticeAction = styled.a`
  justify-content: flex-end;
  margin-bottom: var(--spacing-04);
  margin-left: auto;
  color: var(--pink);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  @media screen and (min-width: 375px) {
    margin-bottom: 0;
  }
`;

export { NoticeContainer, NoticeText, NoticeAction };
