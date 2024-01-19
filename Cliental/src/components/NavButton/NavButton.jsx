import {NavLink} from 'react-router-dom';
import {useMatch} from 'react-router-dom';
import './NavButton.css';
import React from 'react';


// eslint-disable-next-line react/prop-types
const NavButton = ({children, route, buttonColor = '#292929', onClick}) => {
  const match = useMatch(`/${route}`);
  return (
    <NavLink style={{textDecoration: 'none'}} to={route}>
      <div
        className={`nav-button ${match ? 'nav-button-active' : ''}`}
        style={{color: match ? undefined : buttonColor}}
        onClick={onClick}
      >
        {children}
      </div>
    </NavLink>
  );
};

export default NavButton;
