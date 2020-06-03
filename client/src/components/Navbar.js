import React from "react";
import "./navbar.css";
import styled from "@emotion/styled";

const Button = styled.button`
  min-width: fit-content;
  background: linear-gradient(90deg, #1fee7e -64.29%, #2386bd 166.07%), #c4c4c4;
  border: 0;
  border-radius: 5px;
  padding: 0.625em 1.4375em;
  text-transform: uppercase;
  font-weight: 600;
  color: #fff;
  text-shadow: 1px 1px 1px #0000001a;
  font-size: 1.03em;
  letter-spacing: 1px;
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: 1.1em;
  color: #28c7b7;
`;

const SearchBar = styled.input`
  width: 100%;
  height: 32px;
  border: 0;
  border-radius: 5px;
  background-color: #323649;
  color: #a8b6c6;
  padding-left: 2.5em;
  font-size: 1em;
  font-weight: 400;
`;

export const Navbar = () => {
  const toggleMobileSearch = () => {
    const searchContainer = document.querySelector(".search-bar__container");
    const hamburgerMenu = document.querySelector(".nav__link__container");
    if (hamburgerMenu.classList.contains("active")) {
      hamburgerMenu.classList.remove("active");
    }
    searchContainer.classList.toggle("active");
  };

  const toggleHamburgerMenu = () => {
    console.log("Hamburger clicked");
    const hamburgerMenu = document.querySelector(".nav__link__container");
    const searchContainer = document.querySelector(".search-bar__container");
    if (searchContainer.classList.contains("active")) {
      searchContainer.classList.remove("active");
    }
    hamburgerMenu.classList.toggle("active");
  };

  return (
    <nav className="nav">
      <Title className="title">Project Metroid</Title>
      <button
        className="mobile-search-toggle nav__mobile--link"
        onClick={toggleMobileSearch}
      >
        <i className="fas fa-search"></i>
      </button>
      <button className="mobile-user-profile nav__mobile--link">
        <i className="fas fa-user-circle"></i>
      </button>
      <button
        className="mobile-hamburger-menu nav__mobile--link"
        onClick={toggleHamburgerMenu}
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="search-bar__container">
        <i className="search-bar__icon fas fa-search"></i>
        <SearchBar
          type="search"
          name="Search"
          className="search-bar"
          placeholder="Search"
        />
      </div>
      <div className="nav__link__container">
        <a className="nav__link" href="#">
          Discover
        </a>
        <a className="nav__link" href="#">
          Browse
        </a>
      </div>
      <div className="login-links">
        <Button className="sign-up">Sign Up</Button>
        <a className="nav__link" href="#">
          Log In
        </a>
      </div>
    </nav>
  );
};
