import styled from "@emotion/styled";
import "../../styles/base/variables.css";

const SearchBarContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding: var(--spacing-04);
  padding: 0;
  background-color: #171823;
`;

const SearchBarIcon = styled.svg`
  display: block;
  position: absolute;
  top: 11px;
  left: var(--spacing-04);
  width: 14px;
  height: 14px;
  color: #f9b2c8;
`;

const SearchBar = styled.input`
  width: 100%;
  height: 36px;
  padding-top: 0.2em;
  padding-left: var(--spacing-08);
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

export { SearchBarContainer, SearchBarIcon, SearchBar };
