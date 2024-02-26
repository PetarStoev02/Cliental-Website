import React, { useState } from "react";
import "./FAQ.css";

import { FAQ_Object } from "../../common/constants";

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };
  return (
    <div className="faq-wrapper">
      <div id="faq"></div>
      <div className="accordion">
        {FAQ_Object.map((item, id) => (
          <div className="item" key={item.id}>
            <div className="title" onClick={() => toggle(id)}>
              <h2>{item.question}</h2>
              <span>{selected === id ? "↑" : "↓"}</span>
            </div>
            <div className={selected === id ? "content-faq show" : "content-faq"}>
              <ul>
                {item.answer.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
