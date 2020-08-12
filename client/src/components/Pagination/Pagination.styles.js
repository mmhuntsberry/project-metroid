import styled from "@emotion/styled";
import "../../styles/base/variables.css";
// import { mq } from "../../styles/utilities/breakpoints.js";

const PaginationWrapper = styled.nav`
  display: flex;
  align-items: center;
  margin: auto;
`

const PaginationContainer = styled.ul`
  display: flex;
  margin: 0;
  padding-left: 0;
  list-style: none;
`

const PrevNextButton = styled.button`
  height: var(--layout-03);
  margin: 0 var(--spacing-03);
  padding: 0 var(--layout-01);
  border: 0;
  border-radius: var(--spacing-01);
  background-color: var(--dim-green);
  color: var(--white);

  &:hover {
    background-color: var(--green);
  }
`

const PageNumberContainer = styled.li`
  margin: 0 var(--spacing-01);
`

const PageNumberLink = styled.a`
  padding: var(--spacing-01);
  color: ${props => props.currentPage ? "var(--green)" : "var(--grey-01)"};

  &:hover {
    color: var(--green);
  }
`

export {
  PaginationWrapper,
  PaginationContainer,
  PrevNextButton,
  PageNumberContainer,
  PageNumberLink
}