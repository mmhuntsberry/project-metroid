import styled from "@emotion/styled";
import "../../styles/base/variables.css";

const SignUpButton = styled.button`
  min-width: fit-content;
  padding: 0.625em 1.4375em;
  border: 0;
  border-radius: 5px;
  background: linear-gradient(90deg, #1fee7e -64.29%, #2386bd 166.07%), #c4c4c4;
  color: #fff;
  font-size: 1.03em;
  font-weight: 600;
  letter-spacing: 1px;
  text-shadow: 1px 1px 1px #0000001a;
  text-transform: uppercase;
`;

const AppTitle = styled.h2`
  grid-column: 2 / span 1;
  margin: 0 1em;
  color: #28c7b7;
  font-size: var(--body-font-size-01);
  font-weight: normal;
  text-align: center;

  @media screen and (min-width: 360px) {
    font-size: 1.1em;
  }

  @media screen and (min-width: 768px) {
    grid-column: 1;
    font-size: 1.25em;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  height: 32px;
  padding-left: 2.5em;
  border: 0;
  border-radius: 5px;
  background-color: #323649;
  color: #a8b6c6;
  font-size: 1em;
  font-weight: 400;
`;

export { SignUpButton, AppTitle, SearchBar };