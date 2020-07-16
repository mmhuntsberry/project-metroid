import styled from "@emotion/styled";
import "../../styles/base/variables.css";
// import { mq } from "../../styles/utilities/breakpoints.js";

const PageWrapper = styled.div`
  padding-top: var(--spacing-09);
`;

const PageTitle = styled.header`
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

const ContentWrapper = styled.main`
  display: grid;
  grid-template-rows: 56px auto;
`

const MetaWrapper = styled.section`
  display: grid;
  z-index: 10;
  grid-gap: var(--spacing-02);
  grid-template-columns: 300px auto 180px 190px 36px min-content;
  height: 36px;
`

const AddCollectionButton = styled.button`
  padding: 7px var(--spacing-03);
  transition: background 200ms;
  border: 0;
  border-radius: var(--spacing-01);
  background-color: var(--dim-green);
  color: var(--white);
  white-space: nowrap;

  &:hover {
    background-color: var(--green);
  }
`

export { PageWrapper, PageTitle, ContentWrapper, MetaWrapper, AddCollectionButton };