import styled from "@emotion/styled";

const CardRow = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 0 1em;
`;

const RowTitle = styled.h2`
  font-size: 2em;
  font-weight: 500;
  line-height: 1.6;
  color: #28c7b7;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  background: linear-gradient(155.35deg, #1fee7e -28.1%, #2386bd 119.81%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
`;

export { CardRow, RowTitle };
