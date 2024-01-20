import './HomePage.css';
import React from 'react';
import HeroSection from './sections/HeroSection/HeroSection';
import BentoBox from './sections/BentoBox/BentoBox';


const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <BentoBox/>
    </>
  );
};

export default HomePage;
