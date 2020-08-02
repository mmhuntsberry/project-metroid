import React from "react";
import { SortOrderButtonStyles, SortOrderButtonIcon } from "./SortOrderButton.styles";

const SortOrderButton = props => {
  const handleClick = (e) => {
    console.log(props.sortOrder)
    if (props.sortOrder === "asc") {
      // e.target.setAttribute("data-sort", "desc")
      props.setSortOrder("desc")
      props.handleCollectionsSortSelect("desc")
      // console.log(props.sortOrder)
    } else if (props.sortOrder === "desc") {
      // e.target.setAttribute("data-sort", "asc")
      props.setSortOrder("asc")
      props.handleCollectionsSortSelect("asc")
      // console.log(props.sortOrder)
    }
  }

  return (
    <SortOrderButtonStyles className="button__sort-order" sortOrder={props.sortOrder} onClick={(e) => handleClick(e)}>
      <SortOrderButtonIcon
        width="10"
        height="18"
        viewBox="0 0 10 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 5L5 0L10 5H0Z"
          fill="#28C7B7"
          fillOpacity="0.3"
        />
        <path
          d="M8.79289 13.5L5 17.2929L1.20711 13.5H8.79289Z"
          fill="#28C7B7"
          stroke="#28C7B7"
        />
      </SortOrderButtonIcon>
    </SortOrderButtonStyles>
  );
};

export default SortOrderButton;
