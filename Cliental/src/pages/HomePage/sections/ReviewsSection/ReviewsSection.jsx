import React from "react";
import "./ReviewsSection.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { REVIEWS } from "../../../../common/constants";
import ReviewsCard from "../../../../components/ReviewsCard/ReviewsCard";

const ReviewsSection = () => {
  return (
    <div className="reviews-wrapper">
      <div className="revies-heading">НАШИТЕ ДОВОЛНИ<br></br> КЛИЕНТИ </div>
      <div className="reviews-slider">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          className="reviews-swiper"
        >
          {REVIEWS.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="card" key={i}>
                <ReviewsCard review={review}/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewsSection;
