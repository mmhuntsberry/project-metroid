import React from "react";
import { SortOrderButtonStyles } from "./SortOrderButton.styles";

const handleClick = () => {
  this.toggleAttribute("reverse");
}

const SortOrderButton = () => {
  return (
    <SortOrderButtonStyles className="button__sort-order" onClick={handleClick}>
      <svg
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
      </svg>
    </SortOrderButtonStyles>
  );
};

export default SortOrderButton;
