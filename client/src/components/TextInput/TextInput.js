import React from "react";
import {
  InputContainer,
  Input
} from "./TextInput.styles";

const TextInput = (props) => {
  return (
    <InputContainer className="search-bar__container">
      <Input
        type="search"
        name="Search"
        className="search-bar"
        placeholder={props.placeholder}
        dark={props.dark}
      />
    </InputContainer>
  );
};

export default TextInput;