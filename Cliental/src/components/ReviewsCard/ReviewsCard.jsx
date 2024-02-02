import React from "react";
import "./ReviewsCard.css";
import ReviewStars from "../ReviewStars/ReviewStars";

const ReviewsCard = ({ review: { img, title, text } }) => {
  return (
    <div className="reviews-card-wrapper">
      <div className="reviewer-card-name">{title}</div>
      <div className="review-card-text">{text}</div>
      <ReviewStars />
      <div className="quote"></div>
    </div>
  );
};

export default ReviewsCard;
