import styled from "@emotion/styled";
import "../../styles/base/variables.css";
import { mq } from "../../styles/utilities/breakpoints.js";

const PageWrapper = styled.div`
  margin: 0 var(--spacing-02);
  padding-top: var(--spacing-09);

  ${mq[6]} {
    margin: 0;
  }
`;

const PageTitle = styled.header`
  width: max-content;
  margin-top: var(--spacing-07);
  margin-bottom: var(--spacing-02);
  color: var(--green);
  font-size: var(--title-font-size-06);
  font-weight: var(--font-weight-bold);
  line-height: 1.6;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--spacing-06);
`;

const MetaWrapper = styled.section`
  display: grid;
  z-index: 10;
  grid-gap: var(--spacing-02);
  grid-template-columns: minmax(180px, 1fr) var(--toolbar-height);
  align-items: flex-end;

  ${mq[1]} {
    grid-template-columns: minmax(210px, 1fr) minmax(180px, 1fr) min-content;
  }

  ${mq[2]} {
    grid-template-columns: minmax(210px, 1fr) 27px minmax(210px, 1fr) var(--toolbar-height) min-content;

    div:nth-of-type(3) {
      grid-column: span 2;
    }
  }

  ${mq[3]} {
    grid-template-columns: minmax(260px, 1fr) min-content min-content var(--toolbar-height) min-content;

    div:nth-of-type(3) {
      grid-column: span 1;
    }
  }

  ${mq[4]} {
    grid-template-columns: minmax(260px, 1fr) auto min-content min-content var(--toolbar-height) min-content;
  }
`;

const DropdownWithTitle = styled.div`
  display: flex;
  grid-area: 1 / 1 / 1 / -1;
  flex-direction: column;

  ${mq[2]} {
    grid-area: 1 / 1 / 1 / 3;
  }

  ${mq[3]} {
    grid-area: unset;
  }
`;

const DropdownTitle = styled.h6`
  margin: var(--spacing-01) 0;
  color: var(--grey-01);
  font-size: var(--body-font-size-01);
  font-weight: var(-font-weight-bold);
  text-align: left;
  text-transform: uppercase;
`;

const AddCollectionContainer = styled.div``;

const AddCollectionInput = styled.input``;

const AddCollectionButton = styled.button`
  position: relative;
  right: 0;
  grid-area: 5 / 1 / 6 / 3;
  width: auto;
  height: var(--toolbar-height);
  padding: var(--spacing-02);
  transition: background-color 200ms;
  border: 0;
  border-radius: var(--spacing-01);
  background-color: var(--dim-green);
  color: var(--white);
  font-size: var(--body-font-size-03);
  white-space: nowrap;

  &:hover {
    background-color: var(--green);
    cursor: pointer;
  }

  ${mq[1]} {
    grid-area: 4 / 1 / 4 / 4;
  }

  ${mq[2]} {
    grid-area: auto;
    width: var(--layout-08);
  }
`;

export {
  PageWrapper,
  PageTitle,
  ContentWrapper,
  MetaWrapper,
  DropdownWithTitle,
  DropdownTitle,
  AddCollectionContainer,
  AddCollectionInput,
  AddCollectionButton,
};
