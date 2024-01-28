import React from "react";
import "./ReviewsCard.css"
import ReviewStars from "../ReviewStars/ReviewStars";

const ReviewsCard = () => {
  return (
    <div className="card-wrapper">
      <div className="reviewer-name">Ranchlead</div>
      <div className="review-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        eleifend lacus id lectus accumsan, laoreet condimentum purus ornare.
        Cras vitae pellentesque lacus. Sed mollis dignissim metus, ut auctor
        nibh suscipit eget.
      </div>
      <ReviewStars />
    </div>
  );
};

export default ReviewsCard;
