import styled from "@emotion/styled";
import { mq } from "../../styles/utilities/breakpoints";

export const ReviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-bottom: 1px solid var(--white);

  ${mq[1]} {
    grid-template-columns: 100px 1fr;
  }
`;

export const ReviewBy = styled.span`
  margin-right: var(--spacing-04);
  font-size: var(--body-font-size-02);
`;

export const ReviewUserThumbnail = styled.img`
  display: inline-block;
  width: 75px;
  height: 75px;
  margin: 0 auto;
  margin-top: var(--spacing-06);
  border-radius: 100%;
`;

export const ReviewInfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  align-items: baseline;
  margin-top: var(--spacing-06);

  ${mq[2]} {
    grid-template-columns: auto auto auto 2fr;
    justify-content: space-between;
  }
`;

export const ReviewUsername = styled.h4`
  margin: 0;
  margin-right: var(--spacing-04);
  padding-bottom: var(--spacing-02);
  color: var(--dark-theme-bg-tertiary);

  ${mq[2]} {
    padding-bottom: 0;
  }
`;

export const ReviewTimestamp = styled.span`
  padding-bottom: var(--spacing-01);
  color: var(--grey-02);

  ${mq[2]} {
    padding-bottom: 0;
  }
`;

export const ReviewRating = styled.div`
  justify-self: flex-start;

  ${mq[2]} {
    justify-self: flex-end;
  }
`;

export const ReviewBody = styled.p`
  font-size: var(--body-font-size-03);
  line-height: 1.6;
`;
