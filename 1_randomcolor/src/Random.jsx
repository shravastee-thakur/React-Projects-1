import React, { useState } from "react";

const Random = () => {
  let [color, setColor] = useState("#a19c8f");

  const generateHexCol = () => {
    const hex = "#" + Math.random().toString(16).slice(2, 8).padEnd(6, 0);
    setColor(hex);
  };

  const generateRgbCol = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <div className="container" style={{backgroundColor: color}}>
      <div className="btn">
        <button onClick={generateHexCol}>Hex Colour</button>
        <button onClick={generateRgbCol}>RGB Colour</button>
      </div>
      <div className="text">
      <h1>{color}</h1>
      </div>
    </div>
  );
};

export default Random;
