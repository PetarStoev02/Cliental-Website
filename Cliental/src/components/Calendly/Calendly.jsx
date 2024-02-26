import React from "react";
import "./Calendly.css";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <>
    <div id="contacts"></div>
          <InlineWidget url="https://calendly.com/cliental" />;
    </>
  );
};

export default Calendly;
