import './BentoBox.css';
import React from 'react';
import Box from '../../../../components/Box/Box';
import {SERVICES_TYPES} from '../../../../common/constants';

const BentoBox = () => {
  const services = SERVICES_TYPES;
  return (
    <div className="bento-box">
      {services.map((service) => (
        <div key={service.id} className={`grid-item-${service.id}`}>
          <Box service={service}/>
        </div>
      ))}
    </div>
  );
};

export default BentoBox;
