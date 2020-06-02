import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
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
  margin-right: 2em;
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: 1.25em;
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
  return (
    <nav className="nav">
      <Title>Project Metroid</Title>
      <div className="search-bar__container">
        <i class="search-bar__icon fas fa-search"></i>
        <SearchBar
          type="search"
          name="Search"
          id="search-bar"
          placeholder="Search"
        />
      </div>

      <a className="nav__link" href="#">
        Discover
      </a>
      <a className="nav__link" href="#">
        Browse
      </a>
      <div className="login-links">
        <Button className="sign-up">Sign Up</Button>
        <a className="nav__link" href="#">
          Log In
        </a>
      </div>
    </nav>
  );
};
