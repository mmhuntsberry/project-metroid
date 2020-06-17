import React from "react";
import "./navbar.css";
import {SignUpButton, AppTitle, SearchBar } from "./Navbar.styles"
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import searchIcon from "../../assets/nav-search-icon.svg"
import profileIcon from "../../assets/nav-avatar-default.svg"
import menuIcon from "../../assets/nav-menu-icon.svg"

const Nav = styled.nav`
  display: grid;
  position: fixed;
  z-index: 100;
  top: 0;
  grid-template-columns: 64px auto 64px 64px;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: #121216;
  font-weight: 600;
  letter-spacing: 0.31px;

  @media screen and (min-width: 768px) {
    grid-template-columns: max-content minmax(min-content, 400px) max-content auto;
    background-color: #171823;
  }
`

const NavButton = styled.button`
  border: 0;
  background-color: transparent;
  color: #a8b6c6;

  ${props => props.searchToggle 
  ? "grid-column: 1; grid-row: 1;"
  : null }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const NavLinkContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 64px;
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
`

const DimOverlay = styled.div`
  display: none;
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-color: #000c;
`

const SearchBarContainer = styled.div`
  position: absolute;
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
`

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
`

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
`



const NavLink = styled(Link)`
  min-width: fit-content;
  padding: 1.5em 2em;
  border-bottom: 1px solid #7777;
  color: #e2e2e4;
  text-decoration: none;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-left: var(--spacing-04);
    padding: 0;
    border: 0;
  }
` 

const LoginLinksContainer = styled.div`
  display: none;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    margin-right: var(--spacing-04);
    margin-left: auto;
  }
`

const Navbar = () => {
  // function to run when hamburger menu is clicked
  const handleMenuToggle = () => {
    const hamburgerMenu = document.querySelector(".nav__link-container");
    const searchContainer = document.querySelector(".search-bar__container");
    if (searchContainer.classList.contains("is-visible")) {
      searchContainer.classList.remove("is-visible");
    }
    hamburgerMenu.classList.toggle("is-visible");
  };

  // function to run when search icon is clicked
  const handleSearchToggle = () => {
    const searchContainer = document.querySelector(".search-bar__container");
    const hamburgerMenu = document.querySelector(".nav__link-container");
    if (hamburgerMenu.classList.contains("is-visible")) {
      hamburgerMenu.classList.remove("is-visible");
    }
    searchContainer.classList.toggle("is-visible");
  };

  return (
    <Nav>
      <AppTitle className="app-title"> Project Metroid </AppTitle>
      <NavButton
        searchToggle
        className="nav__button nav__button--search-toggle"
        onClick={handleSearchToggle}
      >
        <NavIcon src={searchIcon} />
      </NavButton>
      <NavButton className="nav__button">
        <NavIcon src={profileIcon} />
      </NavButton>
      <NavButton className="nav__button nav__button--menu-toggle" onClick={handleMenuToggle}>
        <NavIcon src={menuIcon} />
      </NavButton>
      <SearchBarContainer className="search-bar__container">
        <SearchBarIcon inset src={searchIcon} />
        <SearchBar
          type="search"
          name="Search"
          className="search-bar"
          placeholder="Search"
        />
      </SearchBarContainer>
      <NavLinkContainer className="nav__link-container">
        <NavLink className="nav__link" to="/discover">
          Discover
        </NavLink>
        <NavLink className="nav__link" to="/browse">
          Browse
        </NavLink>
      </NavLinkContainer>
      <LoginLinksContainer className="login__links-container">
        <SignUpButton className="sign-up">Sign Up</SignUpButton>
        <NavLink className="nav__link">Log In</NavLink>
      </LoginLinksContainer>
      <DimOverlay />
    </Nav>
  );
};

export default Navbar;
