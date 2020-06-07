import styled from "@emotion/styled";

const CardRow = styled.div `
  display: grid;
    overflow-x: auto;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1em;
    margin: 0 1em;
`;

const CardRowGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(2, 1fr) ;
  grid-gap: 1em;
  margin: 0 1em;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr) ) ;
    max-width: 1440px;
  }
`

const RowTitle = styled.h2 `
  font-size: 1.5em;
  font-weight: 500;
  line-height: 1.6;
  color: #28c7b7;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  background: linear-gradient(155.35deg, #1fee7e -28.1%, #2386bd 119.81%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  margin-top: 2rem;
  margin-left: 1rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2em;
    margin-top: 3.5rem;
  }
`;

export {
    CardRow,
    CardRowGrid,
    RowTitle
};