import styled from "@emotion/styled";

const SortOrderButtonStyles = styled.button`
  padding: 9px 12px 6px;
  border: 0;
  border-radius: 0.25rem;
  background-color: #212131;

  &[reverse] {
    transform: rotate(180deg);
  }

  &:hover {
    background-color: #28283c;
    cursor: pointer;
  }

  &:focus {
    border: 0;
    outline: 0;
  }
`;

export { SortOrderButtonStyles };