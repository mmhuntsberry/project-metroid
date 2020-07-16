import React from "react";
import {
  SearchBarContainer,
  SearchBarIcon,
  SearchBar
} from "./ListSearchBar.styles";

const ListSearchBar = () => {
  return (
    <SearchBarContainer className="search-bar__container">
      <SearchBarIcon
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 11.5L15 15M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z"
          stroke="#F9B2C8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SearchBarIcon>
      <SearchBar
        type="search"
        name="Search"
        className="search-bar"
        placeholder="Search this collection"
      />
    </SearchBarContainer>
  );
};

export default ListSearchBar;
