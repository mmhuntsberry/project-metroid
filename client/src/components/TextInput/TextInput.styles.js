import styled from "@emotion/styled";
import "../../styles/base/variables.css";

const InputContainer = styled.div`
  display: block;
  width: 100%;
  background-color: transparent;
`;
const Input = styled.input`
  width: 100%;
  height: var(--toolbar-height);
  padding-left: var(--spacing-04);
  border: 0;
  border-radius: var(--spacing-01);
  background-color: ${props => props.dark ? "var(--dark-blue)" : "var(--foreground-dark-blue)"};
  color: var(--pink);
  font-size: var(--body-font-size-03);
  font-weight: var(--font-weight-normal);
  letter-spacing: 0.31px;

  &:hover {
    background-color: ${props => !props.dark && "var(--foreground-lighter-dark-blue)"};
  }

  &::placeholder {
    opacity: 0.5;
    color: var(--pink);
  }
`;

export { InputContainer, Input };
