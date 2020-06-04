import styled from "@emotion/styled";

const InfoCardContainer = styled.div`
  width: calc(100% - 2em);
  min-height: 64px;
  display: flex;
  color: #e2e2e4;
  background-color: #212131;
  margin-right: 1em;
  padding: 0 1.5em 1.5em;
  font-size: 0.95em;
  border-radius: 4px;
  border: 0;
  line-height: 1.5;
  align-items: flex-start;
`;

const InfoCardText = styled.p`
  justify-content: flex-start;
  margin-right: 1em;
  width: 150px;
`;

export { InfoCardContainer, InfoCardText };
