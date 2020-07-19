import styled from "@emotion/styled";
import "../../styles/base/variables.css";
import { mq } from "../../styles/utilities/breakpoints.js";

const PageWrapper = styled.div`
  margin: var(--spacing-02);
  
  ${mq[6]} {
    margin: var(--spacing-02) 0;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  width: 100%;
  padding: 1rem;
  padding-top: ${(props) => props.currentlyPlaying ? "2rem" : "1rem"};
  border-radius: 0.25rem;
  border-radius: ${(props) => props.currentlyPlaying ? "0 0 0.25rem 0.25rem" : "0.25rem"};
  background-color: #212131;
  color: #bbb;
`;

export { PageWrapper, ContentWrapper };