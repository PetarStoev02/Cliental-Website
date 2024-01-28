import './HomePage.css';
import React, {useState, useEffect} from 'react';
import HeroSection from './sections/HeroSection/HeroSection';
import BentoBox from './sections/BentoBox/BentoBox';
import PreLoader from '../../components/PreLoader/PreLoader';
import ProjectSlider from '../../components/ProjectSlider/ProjectSlider';


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
      <HeroSection />
      <BentoBox />
      <ProjectSlider/> 
  


      {isLoading && <PreLoader />}
    </>
  );
};

export default HomePage;
