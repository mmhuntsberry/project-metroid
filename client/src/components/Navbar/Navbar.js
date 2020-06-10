import React from "react";
import "./navbar.css";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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
  color: #28c7b7;
  font-size: 1.1em;
  font-weight: normal;
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
    <nav className="nav">
      <AppTitle className="app-title"> Project Metroid </AppTitle>
      <button
        className="nav__button nav__button--search-toggle"
        onClick={handleSearchToggle}
      >
        <i className="fas fa-search"> </i>
      </button>
      <button className="nav__button">
        <i className="fas fa-user-circle"> </i>
      </button>
      <button className="nav__button" onClick={handleMenuToggle}>
        <i className="fas fa-bars"> </i>
      </button>
      <div className="search-bar__container">
        <i className="search-bar__icon fas fa-search"> </i>
        <SearchBar
          type="search"
          name="Search"
          className="search-bar"
          placeholder="Search"
        />
      </div>
      <div className="nav__link-container">
        <Link className="nav__link" to="/discover">
          Discover
        </Link>
        <Link className="nav__link" to="/browse">
          Browse
        </Link>
      </div>
      <div className="login__links-container">
        <SignUpButton className="sign-up">Sign Up</SignUpButton>
        <a className="nav__link">Log In</a>
      </div>
    </nav>
  );
};

export default Navbar;
