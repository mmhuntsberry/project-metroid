import React from "react";
// import "../../styles.css";
import {
  DropdownContainer,
  SortByButton,
  SortByList,
  SortByListItem,
} from "./DropdownMenu.styles";

const DropdownMenu = (props) => {
  // let previousButton = "";

  const handleMenuClick = function (e) {
    e.stopPropagation();
    const button = e.target;
    const buttons = Array.from(document.querySelectorAll(".button__sort-by"));
    const list = button.parentElement.lastElementChild;
    const listOfMenus = Array.from(document.querySelectorAll(".list__sort-by"));
    // check if list is open, if so return true
    const isAnotherMenuOpen = !listOfMenus.every((list) =>
      list.hasAttribute("hidden")
    );

    // set button's container (button + list)
    // to a higher z-index so it will appear above the other lists
    button.parentElement.style.zIndex = "15";

    // if this wasn't the last button clicked
    if (button.innerText !== props.previousButton.innerText) {
      // if we click a different button from before, hide all menus
      listOfMenus.map((list) => (list.style.display = "none"));

      // check if another menu is open, then close it
      if (isAnotherMenuOpen) {
        const openMenu = listOfMenus.filter(
          (menu) => !menu.hasAttribute("hidden")
        );
        openMenu[0].parentElement.style.zIndex = "0";
        openMenu[0].toggleAttribute("hidden");
      }

      // remove clicked attribute from all buttons before proceeding;
      buttons.map((button) => button.removeAttribute("clicked"));
      button.toggleAttribute("clicked");
    } else {
      // if we previously clicked the button
      button.toggleAttribute("clicked");
    }

    // toggle the list's display
    list.style.display = list.style.display === "none" ? "block" : "none";

    // delay toggling hidden attribute so our transitions run
    setTimeout(() => list.toggleAttribute("hidden"), 10);

    // if we click a button twice, reset its Z-index to 0
    if (list.style.display === "none") {
      button.parentElement.style.zIndex = "0";
    }

    // remember button for next time
    props.setPreviousButton(button);
  };

  const handleOptionClick = function (e) {
    e.stopPropagation();
    const button = e.target.parentElement.parentElement.firstElementChild;
    const list = e.target.parentElement;
    const selectedText = e.target.innerText;
    const sortOptions = Array.from(e.target.parentElement.children);
    let currentActiveElement;

    sortOptions.some((option) => option.classList.remove("selected"));
    currentActiveElement = e.target;
    currentActiveElement.classList.add("selected");
    button.innerText = `${props.text}${selectedText}`;
    list.style.display = "none";
    button.parentElement.style.zIndex = 0;
    list.toggleAttribute("hidden");

    props.chosenOption(e.target.innerText);
  };

  return (
    <DropdownContainer spanMultiple={props.spanMultiple} menuType={props.menuType}>
      <SortByButton
        className="button__sort-by"
        onClick={function (e) {
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
              onClick={function (e) {
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
