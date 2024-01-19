import NavButton from '../NavButton/NavButton';
import * as ROUTES from '../../common/routes';
import {SERVICES, PORTFOLIO, CONTACTS} from '../../common/constants';
import './NavBar.css';
import React from 'react';
import Logo from '../Logo/Logo';
import ContactButton from '../ContactButton/ContactButton';

// eslint-disable-next-line react/prop-types
const NavBar = () => {
  return (
    <div className="nav-bar">
      <Logo />
      <div className="links">
        <NavButton route={ROUTES.SERVICES_PAGE}>{SERVICES}</NavButton>
        <NavButton route={ROUTES.PORTFOLIO_PAGE}>{PORTFOLIO}</NavButton>
        <NavButton route={ROUTES.CONTACTS_PAGE}>{CONTACTS}</NavButton>
      </div>
      <ContactButton />
    </div>
  );
};

export default NavBar;
