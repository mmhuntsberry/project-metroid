import styled from "@emotion/styled";

const SortOrderButtonStyles = styled.button`
  padding: 9px 12px 6px;
  transform: ${(props) => props.sortOrder === "asc" ? "rotate(180deg)" : "rotate(0deg)"};
  border: 0;
  border-radius: 0.25rem;
  background-color: #212131;
  
  &:hover {
    background-color: #28283c;
    cursor: pointer;
  }

  &:focus {
    border: 0;
    outline: 0;
  }
`;

const SortOrderButtonIcon = styled.svg`
  pointer-events: none;
`

export { SortOrderButtonStyles, SortOrderButtonIcon };