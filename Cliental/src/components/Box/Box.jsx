import { NavLink } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import React, { Suspense, useRef } from "react";
import "./Box.css";

const Box = ({ service: { id, route, name, imageUrl } }) => {
  const spline = useRef();

  const onLoad = (splineApp) => {
    // save the app in a ref for later use
    spline.current = splineApp;
  };

  return (
    <div className="box-wrapper">
      <NavLink style={{ textDecoration: "none" }} to={`/services/${route}`}>
        <div className="title">
          <h1>{name}</h1>
          <svg
            width="38"
            height="36"
            viewBox="0 0 38 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Arrow 5"
              // eslint-disable-next-line max-len
              d="M37.4972 4.11891C37.5628 2.73976 36.4981 1.5685 35.1189 1.50283L12.6444 0.432614C11.2652 0.366941 10.094 1.43172 10.0283 2.81087C9.96262 4.19002 11.0274 5.36128 12.4066 5.42695L32.3839 6.37826L31.4326 26.3556C31.3669 27.7348 32.4317 28.906 33.8109 28.9717C35.19 29.0374 36.3613 27.9726 36.427 26.5934L37.4972 4.11891ZM3.68168 35.8499L36.6817 5.84985L33.3183 2.15015L0.318318 32.1501L3.68168 35.8499Z"
              fill="white"
            />
          </svg>
        </div>
      </NavLink>
      <Suspense fallback={<div>Loading...</div>}>
        <img className="box-img" src={imageUrl} alt="Social Media Icons" />
        {/* <Spline className="object-3d" scene={imageUrl} onLoad={onLoad}/> */}
      </Suspense>
    </div>
  );
};

export default Box;
