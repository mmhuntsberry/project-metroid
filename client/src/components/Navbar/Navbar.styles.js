import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import "../../styles/base/variables.css";

const Nav = styled.nav`
  display: grid;
  position: fixed;
  z-index: 100;
  top: 0;
  grid-template-columns: 64px auto 64px 64px;
  align-items: center;
  width: 100%;
  max-width: var(--max-breakpoint);
  height: 64px;
  background-color: #121216;
  font-weight: 600;
  letter-spacing: 0.31px;

  @media screen and (min-width: 768px) {
    grid-template-columns: max-content minmax(min-content, 400px) max-content auto;
    background-color: #171823;
  }
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

  @media screen and (min-width: 1440px) {
    margin-left: 0;
  }
`;

const NavButton = styled.button`
  border: 0;
  background-color: transparent;
  color: #a8b6c6;

  ${(props) => (props.searchToggle ? "grid-column: 1; grid-row: 1;" : null)}

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NavIcon = styled.img`
  display: inline-block;
  width: var(--layout-02);
  height: var(--layout-02);
  color: #a8b6c6;

  &:hover {
    filter: invert(56%) sepia(58%) saturate(479%) hue-rotate(125deg)
      brightness(101%) contrast(99%);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const SearchBarContainer = styled.div`
  position: absolute;
  z-index: inherit;
  top: 64px;
  width: 100%;
  padding: var(--spacing-04);
  background-color: #171823;

  @media screen and (min-width: 768px) {
    display: flex;
    position: relative;
    top: unset;
    padding: 0;
  }
`;

const SearchBarIcon = styled.img`
  display: none;
  position: absolute;
  top: var(--spacing-02);
  left: var(--spacing-03);
  width: var(--layout-01);
  height: var(--layout-01);
  color: #a8b6c6;

  @media screen and (min-width: 768px) {
    display: block;
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

const NavLinkContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 129px;
  flex-direction: column;
  width: 100%;
  margin-right: var(--spacing-04);
  background-color: #171823;

  @media screen and (min-width: 768px) {
    display: flex;
    position: relative;
    top: unset;
    flex-direction: row;
    align-items: center;
    width: unset;
  }
`;

const NavLink = styled(Link)`
  min-width: fit-content;
  padding: 1.5em 2em;
  color: #e2e2e4;
  text-decoration: none;
  text-transform: uppercase;

  ${(props) => (props.children === "Log In" ? "border: 0;" : "border-bottom: 1px solid #7777;")}

  &:hover {
    color: var(--green);
  }

  @media screen and (min-width: 768px) {
    margin-left: var(--spacing-04);
    padding: 0;
    border: 0;
  }
`;

const LoginLinksContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 63px;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #7777;
  background-color: #171823;

  @media screen and (min-width: 768px) {
    display: flex;
    position: relative;
    top: unset;
    justify-content: flex-end;
    margin-left: auto;
    padding-right: var(--spacing-04);
    border: 0;
  }

  @media screen and (min-width: 1440px) {
    padding-right: 0;
  }
`;

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

const DimOverlay = styled.div`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-color: #000c;
`;

export {
  Nav,
  AppTitle,
  NavButton,
  NavIcon,
  SearchBarContainer,
  SearchBarIcon,
  SearchBar,
  NavLinkContainer,
  NavLink,
  LoginLinksContainer,
  SignUpButton,
  DimOverlay,
};
