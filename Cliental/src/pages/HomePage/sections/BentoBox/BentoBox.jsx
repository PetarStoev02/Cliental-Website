import './BentoBox.css';
import React from 'react';
import Box from '../../../../components/Box/Box';
import {SERVICES_TYPES} from '../../../../common/constants';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../../../common/routes';


const BentoBox = () => {
  const services = SERVICES_TYPES;
  return (
    <div className='bento-wrapper'>
      <div className="bento-box">
        {services.map((service, i) => (
          <div
            key={i}
            className={`grid-item grid-item-${i + 1}`}
          >
            <Box service={service} />
          </div>
        ))}
      </div>
      <NavLink style={{textDecoration: 'none'}} to={ROUTES.CONTACTS_PAGE}>
        <div className="hero-button-wrapper">
          <p>БЕЗПЛАТНА КОНСУЛТАЦИЯ</p>
        </div>
      </NavLink>
    </div>

  );
};

export default BentoBox;
