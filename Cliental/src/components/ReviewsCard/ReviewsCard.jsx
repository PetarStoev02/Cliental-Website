import React from "react";
import "./ReviewsCard.css";
import ReviewStars from "../ReviewStars/ReviewStars";

const ReviewsCard = () => {
  return (
    <div className="reviews-card-wrapper">
      <div className="reviewer-card-name">Ranchlead</div>
      <div className="review-card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        eleifend lacus id lectus accumsan, laoreet condimentum purus ornare.
        Cras vitae pellentesque lacus. Sed mollis dignissim metus, ut auctor
        nibh suscipit eget.
      </div>
      <ReviewStars />
      <div className="quote">
        
      </div>
      
    </div>
  );
};

export default ReviewsCard;
