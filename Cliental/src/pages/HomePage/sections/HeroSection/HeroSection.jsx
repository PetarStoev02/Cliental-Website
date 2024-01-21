import './HeroSection.css';
import React from 'react';
import Logo1 from '../../../../assets/Logo 1.png';
import Logo2 from '../../../../assets/Logo 2.png';
import Logo3 from '../../../../assets/Logo 3.jpg';
import Logo4 from '../../../../assets/Logo 4.jpg';
import Logo5 from '../../../../assets/Logo 5.png';
import Logo6 from '../../../../assets/Logo 6.png';

import videoBG from '../../../../assets/videoBg.mp4';
import {NavLink} from 'react-router-dom';
import * as ROUTES from '../../../../common/routes';

const HeroSection = () => {
  return (
    <div className="hero-wraper">
      <video src={videoBG} autoPlay loop muted preload="auto" />
      <div className="content">
        <div className="text">
          <h1>
            Спомагаме за Вашето <br />
            <span>Дигитално развитие</span>
          </h1>
          <h2>
            Вашият успех е нашата страст - Растем заедно във виртуалния свят на
            възможностите.
          </h2>
        </div>

        <NavLink style={{textDecoration: 'none'}} to={ROUTES.CONTACTS_PAGE}>
          <div className="hero-button-wrapper">
            <p>БЕЗПЛАТНА КОНСУЛТАЦИЯ</p>
          </div>
        </NavLink>

        <div className="clients">
          <div className="logo-container">
            <img src={Logo1} alt="Logo 1" loading="lazy"/>
            <img src={Logo2} alt="Logo 2" loading="lazy"/>
            <img src={Logo3} alt="Logo 3" loading="lazy"/>
            <img src={Logo4} alt="Logo 4" loading="lazy"/>
            <img src={Logo5} alt="Logo 5" loading="lazy"/>
            <img src={Logo6} alt="Logo 6" loading="lazy"/>
          </div>
          <div className="achievements">
            <h1>10М+</h1>
            <p>генерирани <br/> гледания</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
