import NavButton from "../NavButton/NavButton";
import * as ROUTES from "../../common/routes";
import { SERVICES, PORTFOLIO, CONTACTS } from "../../common/constants";
import "./NavBar.css";
import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import { PopupButton } from "react-calendly";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";

// eslint-disable-next-line react/prop-types
const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  

  return (
    <div className={click ? "nav-bar active" : "nav-bar"}>
      <div className={`${show && "nav-top-side"}`}>
        <SocialMediaIcons />
        <div className="languish">
          <span>BG</span>
          <span>|</span>
          <span>EN</span>
        </div>
      </div>
      <div className={`${show && "nav-divider"}`}></div>
      <div className="nav-bottom-side">
        {" "}
        <Logo onClick={closeMobileMenu} />
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
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
          <PopupButton
            className="nav-contact"
            url="https://calendly.com/cliental"
            rootElement={document.getElementById("root")}
            text="ИЗПРАТИ ЗАПИТВАНЕ"
          />
          <div className="socialists-active">
            <SocialMediaIcons />
            <div className="languish">
              <span>BG</span>
              <span>|</span>
              <span>EN</span>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
