import React, { useState } from "react";
import "./FAQ.css";

const FAQ = ({ data }) => {
  const [selected, setSelected] = useState(null);

  const toggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };

  return (
    <div className="faq-wrapper">
      <div className="accordion">
        {data.map((item, id) => (
          <div className="item" key={item.id}>
            <div className="title" onClick={() => toggle(id)}>
              <h2>{item.question}</h2>
              <span>{selected === id ? "↑" : "↓"}</span>
            </div>
            <div className={selected === id ? "content show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
