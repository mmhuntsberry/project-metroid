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
  color: #28c7b7;
  font-size: var(--title-font-size-06);
  font-weight: 500;
  line-height: 1.6;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 56px auto;
`;

const MetaWrapper = styled.section`
  display: grid;
  z-index: 10;
  grid-gap: var(--spacing-02);
  grid-template-columns: minmax(180px, 1fr) 36px;
  align-items: flex-end;
  height: 36px;

  ${mq[1]} {
    grid-template-columns: minmax(210px, 1fr) minmax(180px, 1fr) min-content;
  }

  ${mq[2]} {
    grid-template-columns: minmax(210px, 1fr) 27px minmax(210px, 1fr) 36px min-content;
    
    div:nth-of-type(3) {
      grid-column: span 2;
    }
  }

  ${mq[3]} {
    grid-template-columns: minmax(300px, 1fr) min-content min-content 36px min-content;

    div:nth-of-type(3) {
      grid-column: span 1;
    }
  }

  ${mq[4]} {
    grid-template-columns: minmax(300px, 1fr) auto min-content min-content 36px min-content;
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
  color: #bbb;
  font-size: var(--body-font-size-01);
  font-weight: 600;
  text-align: left;
  text-transform: uppercase;
`;

const AddCollectionContainer = styled.div`
  display: none;
  position: relative;
  z-index: 15;

  ${mq[2]} {
    display: flex;
    
  }
`;

const AddCollectionInput = styled.input`
  display: none;
  position: absolute;
  right: 0;
  width: 100%;
  height: 36px;
  padding-top: 0.2rem;
  padding-right: var(--spacing-08);
  padding-left: 1rem;
  transform: scaleX(0);
  transform-origin: right;
  transition: all 350ms ease-in-out;
  border: 0;
  border-radius: 5px;
  background-color: #212131;
  color: #f9b2c8;
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 0.31px;

  &::placeholder {
    opacity: 0.5;
    color: #f9b2c8;
  }
`;
const AddCollectionButton = styled.button`
  position: relative;
  right: 0;
  width: 140px;
  height: 36px;
  padding: 7px var(--spacing-02);
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
  AddCollectionButton
};
