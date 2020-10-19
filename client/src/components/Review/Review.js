import React from "react";
// import { ReviewModel } from "../../models";
// import StarRatings from "react-star-ratings";
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

// interface Props {
//   userReview: ReviewModel;
// }

// interface User {
//   username: string;
//   thumbnail: string;
// }

const Review = (props) => {
  const { 
    userReview,
    // created_at 
  } = props;

  // const { username, thumbnail } = userReview.user;

  return (
    <ReviewContainer>
      <ReviewUserThumbnail src={userReview.author.thumbnail} />

      <div>
        <ReviewInfoContainer>
          <ReviewBy>Reviewed by</ReviewBy>
          <ReviewUsername>{userReview.author.username}</ReviewUsername>
          <ReviewTimestamp>
            <em>{userReview.timestamp}</em>
          </ReviewTimestamp>
          <ReviewRating>
            <react-star-ratings
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
