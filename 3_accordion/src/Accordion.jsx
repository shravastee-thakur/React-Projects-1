import React, { useState } from "react";
import "./Accordion.css";
import Data from "./Data";

const Accordion = () => {
  const [active, setActive] = useState(null)

const handleClick = (index) => {
  setActive(active === index ? null : index)
}

  return (
    <main className="container">
      <div>
        {/* header */}

        <div className="header">
          <h2>Undergraduate Application</h2>
        </div>

        {/* accordion */}
        <div className="wrapper">
          {Data.map((item, index) => {
            return (
              <div key={index} className="try">
                {/* title section */}
                <div 
                onClick={() => handleClick(index)}
                className="box">
                  <div className="h3">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="plus">+</div>
                </div>

                {/* content */}
                <div className="content">

                  {
                    active === index &&
                    <div>
                    <p>{item.content}</p>
                  </div>
                  }
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Accordion;
