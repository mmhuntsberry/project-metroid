import styled from "@emotion/styled";
import { mq } from "../../styles/utilities/breakpoints.js";

const DropdownContainer = styled.div`
  position: relative;
  grid-area: ${props => props.menuType === "sortby" ? "4 / 1 / 5 / 2" : "3 / 1 / 4 / 3"};

  ${mq[1]} {
    grid-area: unset;
    grid-column: span 1;
  }
`

const SortByButton = styled.button`
  position: relative;
  z-index: 10;
  width: 100%;
  height: var(--toolbar-height);
  padding: var(--spacing-03);
  padding-right: var(--spacing-07);
  overflow: hidden;
  border: 0;
  border-radius: var(--spacing-01);
  background-color: var(--foreground-dark-blue);
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2328c7b7%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right var(--spacing-03) top 50%;
  background-size: var(--body-font-size-00) auto;
  color: var(--green);
  font-size: var(--body-font-size-01);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.31px;
  text-align: left;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
  
  &[clicked] {
    border-radius: var(--spacing-01) var(--spacing-01) 0 0;
  }

  &:hover {
    background-color: var(--foreground-lighter-dark-blue);
    cursor: pointer;
  }

  &:focus {
    border: 0;
    outline: 0;
  }
`;

const SortByList = styled.ul`
  display: none;
  position: absolute;
  z-index: -1;
  right: 0;
  left: 0;
  margin: 0;
  padding: 0;
  padding-bottom: var(--spacing-01);
  transform: translateY(0%);
  transform-origin: center top;
  transition: transform 150ms ease, opacity 100ms 50ms ease;
  border-radius: 0 0 var(--spacing-01) var(--spacing-01);
  opacity: 1;
  background-color: var(--foreground-dark-blue);
  box-shadow: 0 3px 8px #0005;
  color: var(--green);
  font-size: var(--body-font-size-01);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.31px;
  list-style: none;
  text-transform: uppercase;

  &[hidden] {
    transform: translateY(-100%);
    transition: transform 250ms ease, opacity 90ms ease;
    opacity: 0;
  }
`;

const SortByListItem = styled.li`
  margin: 0;
  padding: var(--spacing-02);
  
  background-color: transparent;
  letter-spacing: 0.31px;
  text-align: left;

  &:hover {
    background-color: var(--foreground-lighter-dark-blue);
    cursor: pointer;
  }

  &.selected {
    background-color: var(--foreground-lighter-dark-blue);
  }
`;

export { DropdownContainer, SortByButton, SortByList, SortByListItem };
