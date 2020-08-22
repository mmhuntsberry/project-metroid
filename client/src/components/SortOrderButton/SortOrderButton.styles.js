import styled from "@emotion/styled";

const SortOrderButtonStyles = styled.button`
  height: var(--toolbar-height);
  padding: var(--spacing-02) var(--spacing-03);
  transform: ${(props) => props.sortOrder === "asc" ? "rotate(180deg)" : "rotate(0deg)"};
  border: 0;
  border-radius: var(--spacing-01);
  background-color: var(--foreground-dark-blue);
  
  &:hover {
    background-color: var(--foreground-lighter-dark-blue);
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