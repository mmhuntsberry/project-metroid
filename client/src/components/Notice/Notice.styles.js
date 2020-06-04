import styled from "@emotion/styled";

const NoticeContainer = styled.div`
  width: calc(100% - 2em);
  min-height: 64px;
  display: flex;
  color: #e2e2e4;
  background-color: #212131;
  margin: 1em;
  padding: 0 1.5em;
  font-size: 0.95em;
  border-radius: 4px;
  border: 0;
  line-height: 1.5;
  align-items: center;
`;

const NoticeText = styled.p`
  justify-content: flex-start;
  margin-right: 1em;
`;

const NoticeAction = styled.a`
  text-transform: uppercase;
  color: #f9b2c8;
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none;
  justify-content: flex-end;
  margin-left: auto;
`;

export { NoticeContainer, NoticeText, NoticeAction };
