import NavButton from '../NavButton/NavButton';
import * as ROUTES from '../../common/routes';
import {SERVICES, PORTFOLIO, CONTACTS} from '../../common/constants';
import './NavBar.css';
import React, {useState} from 'react';
import Logo from '../Logo/Logo';
import ContactButton from '../ContactButton/ContactButton';

// eslint-disable-next-line react/prop-types
const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className={click ? 'nav-bar active' : 'nav-bar'}>
      <Logo onClick={closeMobileMenu} />
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <NavButton
            className="nav-links"
            route={ROUTES.SERVICES_PAGE}
            onClick={closeMobileMenu}
          >
            {SERVICES}
          </NavButton>
        </li>
        <li className="nav-item">
          <NavButton
            className="nav-links"
            route={ROUTES.PORTFOLIO_PAGE}
            onClick={closeMobileMenu}
          >
            {PORTFOLIO}
          </NavButton>
        </li>
        <li className="nav-item">
          <NavButton
            className="nav-links"
            route={ROUTES.CONTACTS_PAGE}
            onClick={closeMobileMenu}
          >
            {CONTACTS}
          </NavButton>
        </li>
      </ul>
      <ContactButton />
    </div>
  );
};

export default NavBar;
