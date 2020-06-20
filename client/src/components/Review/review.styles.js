import styled from "@emotion/styled";
import { mq } from "../../styles/utilities/breakpoints";

export const ReviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${mq[1]} {
    grid-template-columns: 100px 1fr;
  }
`;

export const ReviewUserThumbnail = styled.img`
  display: inline-block;
  width: 75px;
  margin: 0 auto;
  margin-top: 24px;
  border-radius: 100%;
`;

export const ReviewInfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  align-items: baseline;
  margin-top: 24px;

  ${mq[0]} {
    justify-content: space-between;
  }
`;

export const ReviewUsername = styled.h4`
  margin: 0;
  color: var(--dark-theme-bg-tertiary);
`;

export const ReviewTimestamp = styled.span`
  color: var(--grey-02);
`;

export const ReviewRating = styled.div`
  justify-self: flex-start;

  ${mq[1]} {
    grid-template-columns: min-content min-content min-content 1fr;
    /* justify-self: flex-end; */
  }
`;
