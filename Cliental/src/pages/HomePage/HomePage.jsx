import "./HomePage.css";
import React, { useState, useEffect } from "react";
import HeroSection from "./sections/HeroSection/HeroSection";
import BentoBox from "./sections/BentoBox/BentoBox";
import PreLoader from "../../components/PreLoader/PreLoader";
import ProjectSlider from "./sections/ProjectSlider/ProjectSlider";
import ReviewsSection from "./sections/ReviewsSection/ReviewsSection";
import Calendly from "../../components/Calendly/Calendly";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

const HomePage = () => {
  // loader state
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);
  return (
    <>
      <NavBar />
      <HeroSection />
      <BentoBox />
      <ReviewsSection />
      <ProjectSlider />
      <Calendly />
      <Footer />
      {isLoading && <PreLoader />}
    </>
  );
};

export default HomePage;
