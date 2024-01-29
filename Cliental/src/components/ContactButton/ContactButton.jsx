import { NavLink } from "react-router-dom";
import "./ContactButton.css";
import { SEND_REQUEST } from "../../common/constants";
import * as ROUTES from "../../common/routes";
import React from "react";
import { PopupButton } from "react-calendly";
const ContactButton = () => {
  return (
    // <NavLink style={{textDecoration: 'none'}} to={ROUTES.HOME_PAGE}>
    //   <div className="contact-button-wrapper">
    //     <h1>{SEND_REQUEST}</h1>
    //   </div>
    // </NavLink>

    <PopupButton
      className="contact-button-wrapper"
      url="https://calendly.com/cliental"
      rootElement={document.getElementById("root")}
      text="БЕЗПЛАТНА КОНСУЛТАЦИЯ"
    />
  );
};

export default ContactButton;
