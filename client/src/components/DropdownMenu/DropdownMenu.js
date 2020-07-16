import React from "react";
// import "../../styles.css";
import {
  DropdownContainer,
  SortByButton,
  SortByList,
  SortByListItem
} from "./DropdownMenu.styles";

const DropdownMenu = props => {
  const handleMenuClick = function(e) {
    e.stopPropagation();
    const button = e.target;
    const list = button.parentElement.lastElementChild;

    list.toggleAttribute("hidden");
    button.toggleAttribute("clicked");
  };

  const handleOptionClick = function(e) {
    e.stopPropagation();
    const button = e.target.parentElement.parentElement.firstElementChild;
    const list = e.target.parentElement;
    const selectedText = e.target.innerText;
    const sortOptions = Array.from(e.target.parentElement.children);
    let currentActiveElement;

    sortOptions.some(option => option.classList.remove("selected"));
    currentActiveElement = e.target;
    currentActiveElement.classList.add("selected");
    button.innerText = `${props.text}${selectedText}`;
    list.toggleAttribute("hidden");
  };

  return (
    <DropdownContainer>
      <SortByButton
        className="button__sort-by"
        onClick={function(e) {
          handleMenuClick(e);
        }}
      >
        {`${props.text}${props.default}`}
      </SortByButton>
      <SortByList className="list__sort-by" hidden={true}>
        {props.options.map((option, index) => {
          return (
            <SortByListItem
              className={`list-item__sort-by${
                option === props.default ? " selected" : ""
              }`}
              key={option}
              onClick={function(e) {
                handleOptionClick(e);
              }}
            >
              {option}
            </SortByListItem>
          );
        })}
      </SortByList>
    </DropdownContainer>
  );
};

export default DropdownMenu;
