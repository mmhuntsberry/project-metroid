import styled from "@emotion/styled";
import "../../styles/base/variables.css";

const InputContainer = styled.div`
  display: block;
  width: 100%;
  background-color: transparent;
`;
const Input = styled.input`
  width: 100%;
  height: 36px;
  padding-top: 0.2em;
  padding-left: var(--spacing-04);
  border: 0;
  border-radius: 5px;
  background-color: ${props => props.dark ? "var(--dark-blue)" : "var(--foreground-dark-blue)"};
  color: #f9b2c8;
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 0.31px;

  &:hover {
    background-color: ${props => !props.dark && "#28283c"};
  }

  &::placeholder {
    opacity: 0.5;
    color: #f9b2c8;
  }
`;

export { InputContainer, Input };
