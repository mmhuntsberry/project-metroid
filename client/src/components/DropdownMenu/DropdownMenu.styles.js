import styled from "@emotion/styled";
import { mq } from "../../styles/utilities/breakpoints.js";

const DropdownContainer = styled.div`
  position: relative;
  grid-column: ${props => props.spanMultiple === true ?  "span 2" : "unset" };

  ${mq[1]} {
    grid-column: span 1;
  }
`

const SortByButton = styled.button`
  position: relative;
  z-index: 10;

  width: 100%;
  padding: 0.7rem;
  padding-right: 2rem;
  overflow: hidden;
  border: 0;
  border-radius: 0.25rem;
  background-color: #212131;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2328c7b7%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 0.7em top 50%;
  background-size: 0.65em auto;
  color: #28c7b7;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.31px;
  text-align: left;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
  
  &[clicked] {
    border-radius: 0.25rem 0.25rem 0 0;
  }

  &:hover {
    background-color: #28283c;
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
  padding-bottom: 0.25rem;
  transform: translateY(0%);
  transform-origin: center top;
  transition: transform 150ms ease, opacity 100ms 50ms ease;
  border-radius: 0 0 0.25rem 0.25rem;
  opacity: 1;
  background-color: #212131;
  box-shadow: 0 3px 8px #0005;
  color: #28c7b7;
  font-size: 0.75rem;
  font-weight: 600;
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
  padding: 0.5rem;
  
  background-color: transparent;
  letter-spacing: 0.31px;
  text-align: left;

  &:hover {
    background-color: #28283c;
    cursor: pointer;
  }

  &.selected {
    background-color: #28283c;
  }
`;

export { DropdownContainer, SortByButton, SortByList, SortByListItem };
