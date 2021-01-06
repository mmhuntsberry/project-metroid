import styled from "@emotion/styled";

const InfoCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 64px;
  padding: 0 1.5em 1.5em;
  border: 0;
  border-radius: 4px;
  background-color: #212131;
  color: #e2e2e4;
  font-size: 0.95em;
  line-height: 1.5;
`;

const InfoCardText = styled.p`
  display: grid;
  align-items: center;
  justify-content: center;
  /* justify-content: flex-start; */
  /* margin-right: 1em; */
  width: 150px;
`;

export { InfoCardContainer, InfoCardText };
