import styled from "@emotion/styled";
import "../../styles/base/variables.css";
import { mq } from "../../styles/utilities/breakpoints.js";

const PageWrapper = styled.div`
  margin: var(--spacing-02) 0;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-gap: var(--spacing-02);
  width: 100%;

  ${mq[2]} {
    padding: var(--spacing-02);

    border-radius: ${(props) =>
      props.currentlyPlaying
      ? "0 0 var(--spacing-01) var(--spacing-01)"
      : "var(--spacing-01)"};
    background-color: var(--foreground-dark-blue);
  }

  ${mq[4]} {
    padding: var(--spacing-04);
    padding-top: ${(props) =>
      props.currentlyPlaying ? "var(--spacing-07)" : "var(--spacing-04)"};
  }
`;

const CollectionListContainer = styled.div`
  display: grid;
  grid-gap: var(--spacing-02);

  ${mq[2]} {
    display: flex;
    flex-direction: column;
  }
`;

export { PageWrapper, ContentWrapper, CollectionListContainer };
