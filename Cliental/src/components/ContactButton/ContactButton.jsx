import {NavLink} from 'react-router-dom';
import './ContactButton.css';
import * as ROUTES from '../../common/routes';
import React from 'react';

const ContactButton = () => {
  return (
    <NavLink style={{textDecoration: 'none'}} to={ROUTES.HOME_PAGE}>
      <div className="contact-button-wrapper">
        <h1>ИЗПРАТИ ЗАПИТВАНЕ</h1>
      </div>
    </NavLink>
  );
};

export default ContactButton;
