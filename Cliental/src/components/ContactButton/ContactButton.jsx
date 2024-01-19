import {NavLink} from 'react-router-dom';
import './ContactButton.css';
import {SEND_REQUEST} from '../../common/constants';
import * as ROUTES from '../../common/routes';
import React from 'react';

const ContactButton = () => {
  return (
    <NavLink style={{textDecoration: 'none'}} to={ROUTES.HOME_PAGE}>
      <div className="contact-button-wrapper">
        <h1>{SEND_REQUEST}</h1>
      </div>
    </NavLink>
  );
};

export default ContactButton;
