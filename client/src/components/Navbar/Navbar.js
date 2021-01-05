import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import {
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
} from "./Navbar.styles";
import searchIcon from "../../assets/nav-search-icon.svg";
import profileIcon from "../../assets/nav-avatar-default.svg";
import menuIcon from "../../assets/nav-menu-icon.svg";

const Navbar = () => {
  // function to run when hamburger menu is clicked
  const handleMenuToggle = () => {
    const hamburgerMenu = document.querySelector(".nav__link-container");
    const loginOptions = document.querySelector(".login__links-container");
    const searchContainer = document.querySelector(".search-bar__container");
    const overlay = document.querySelector(".overlay");
    if (searchContainer.classList.contains("is-visible")) {
      searchContainer.classList.remove("is-visible");
    }
    if (!searchContainer.classList.contains("is-visible") && !hamburgerMenu.classList.contains("is-visible")) {
      overlay.classList.remove("is-visible");
      overlay.classList.add("is-visible");
    } else {
      overlay.classList.remove("is-visible");
    }
    hamburgerMenu.classList.toggle("is-visible");
    loginOptions.classList.toggle("is-visible");
  };

  // function to run when search icon is clicked
  const handleSearchToggle = () => {
    const searchContainer = document.querySelector(".search-bar__container");
    const hamburgerMenu = document.querySelector(".nav__link-container");
    const loginOptions = document.querySelector(".login__links-container");
    const overlay = document.querySelector(".overlay");
    if (hamburgerMenu.classList.contains("is-visible")) {
      hamburgerMenu.classList.remove("is-visible");
      loginOptions.classList.remove("is-visible");
    }
    if (!searchContainer.classList.contains("is-visible") && !hamburgerMenu.classList.contains("is-visible")) {
      overlay.classList.remove("is-visible");
      overlay.classList.add("is-visible");
    } else {
      overlay.classList.remove("is-visible");
    }
    searchContainer.classList.toggle("is-visible");
  };

  return (
    <Nav>
      <Link to="/">
        <AppTitle className="app-title"> Project Metroid </AppTitle>
      </Link>
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
      <NavButton
        className="nav__button nav__button--menu-toggle"
        onClick={handleMenuToggle}
      >
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
        <NavLink className="nav__link" to="/collections">
          Collections
        </NavLink>
      </NavLinkContainer>
      <LoginLinksContainer className="login__links-container">
        <SignUpButton className="sign-up">Sign Up</SignUpButton>
        <NavLink className="nav__link" to="/discover">
          Log In
        </NavLink>
      </LoginLinksContainer>
      <DimOverlay className="overlay" />
    </Nav>
  );
};

export default Navbar;
