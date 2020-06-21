import React, { FunctionComponent } from "react";
import { ReviewModel } from "../../models";
import StarRatings from "react-star-ratings";
import {
  ReviewContainer,
  ReviewUserThumbnail,
  ReviewInfoContainer,
  ReviewRating,
  ReviewUsername,
  ReviewTimestamp,
  ReviewBy,
  ReviewBody,
} from "./Review.styles.js";

interface Props {
  userReview: ReviewModel;
}

interface User {
  username: string;
  thumbnail: string;
}

const Review: FunctionComponent<Props> = (props: Props) => {
  const { userReview } = props;
  const { username, thumbnail } = userReview.user as User;

  return (
    <ReviewContainer>
      <ReviewUserThumbnail src={thumbnail} />
      <div>
        <ReviewInfoContainer>
          <ReviewBy>Reviewed by</ReviewBy>
          <ReviewUsername>{username}</ReviewUsername>
          <ReviewTimestamp>
            <em>{userReview.timestamp}</em>
          </ReviewTimestamp>
          <ReviewRating>
            <StarRatings
              rating={userReview.rating}
              starRatedColor="#f9b2c8"
              starSpacing="2px"
              starDimension="20px"
              changeRating={false}
              numberOfStars={5}
              name="rating"
            />
          </ReviewRating>
        </ReviewInfoContainer>
        <ReviewBody>{userReview.review}</ReviewBody>
      </div>
    </ReviewContainer>
  );
};

export default Review;
