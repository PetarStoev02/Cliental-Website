import React from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import * as ROUTES from "../../common/routes";
import ContactButton from "../ContactButton/ContactButton";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";

const Footer = () => {
  return (
    <div className="footer-container">
      <Logo className="footer-logo" />
      <div className="footer-nav-links">
        <NavLink to={ROUTES.SERVICES_PAGE} style={{ textDecoration: "none" }}>
          УСЛУГИ
        </NavLink>
        <NavLink to={ROUTES.PORTFOLIO_PAGE} style={{ textDecoration: "none" }}>
          ПОРТФОЛИО
        </NavLink>
        <NavLink to={ROUTES.CONTACTS_PAGE} style={{ textDecoration: "none" }}>
          КОНТАКТИ
        </NavLink>
      </div>
      <div className="footer-nav-links">
        <NavLink to={ROUTES.FAQ} style={{ textDecoration: "none" }}>
          FAQ
        </NavLink>
        <NavLink
          to={ROUTES.PRIVACY_POLICIES_PAGE}
          style={{ textDecoration: "none" }}
        >
          ПОЛИТИКА ЗА ПОВЕРИТЕЛНОСТ
        </NavLink>
        <NavLink
          to={ROUTES.PRIVACY_POLICIES_PAGE}
          style={{ textDecoration: "none" }}
        >
          БИСКВИТКИ
        </NavLink>
      </div>
      <div className="contacts-footer">
        <ContactButton />
        <SocialMediaIcons />
      </div>

      <div className="footer-copyright">Cliental © 2024</div>
    </div>
  );
};

export default Footer;
