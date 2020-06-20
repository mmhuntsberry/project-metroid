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
} from "./review.styles.js";

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
          <span>Reviewed by</span>
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
        <div className="review__text-container">
          <p>{userReview.review}</p>
        </div>
      </div>
    </ReviewContainer>
  );
};

export default Review;
