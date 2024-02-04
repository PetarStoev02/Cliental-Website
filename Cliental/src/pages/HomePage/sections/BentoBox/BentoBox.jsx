import "./BentoBox.css";
import React from "react";
import Box from "../../../../components/Box/Box";
import { SERVICES_TYPES } from "../../../../common/constants";
import ContactButton from "../../../../components/ContactButton/ContactButton";


const BentoBox = () => {
  const services = SERVICES_TYPES;
  return (
    <div className="bento-wrapper">
       <div id="services"></div>
      <div className="bento-title">
        <h1>НАШИТЕ УМЕНИЯ</h1>
      </div>
      <div className="bento-box">
        {services.map((service, i) => (
          <div key={i} className={`grid-item grid-item-${i + 1}`}>
            <Box service={service} />
          </div>
        ))}
      </div>
      <ContactButton/>
      
    </div>
  );
};

export default BentoBox;
