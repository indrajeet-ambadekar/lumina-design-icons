import React, { useState } from "react";

import { LuminaIcon, LuminaIconList } from "lumina-design-icons";
import "lumina-design-icons/dist/index.css";

const App = () => {
  const _renderIcon = (icon) => {
    return React.createElement(LuminaIconList[icon], {
      style: { fontSize: 30, margin: `10px` }
    });
  };

  return (
    <div className='showcase-container'>
      <section className='showcase-item'>
        <h1 type='h2'>Icon Component</h1>
        <div className='icon-cntnr'>
          {Object.keys(LuminaIconList).map((icon, i) => (
            <div key={i} className='icon-tile'>
              <span title={icon}>{_renderIcon(icon)}</span>
              <h4>
                {icon
                  .replace(/([a-z])([0-9]+)/g, "$1-$2-")
                  .replace(/([0-9])([a-z])/g, "$1-$2")
                  .replace(/([a-z])([A-Z])/g, "$1-$2")
                  .toLowerCase()
                  .replace(/([a-z])([A-Z])/g, "$1-$2")
                  .toLowerCase()}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
