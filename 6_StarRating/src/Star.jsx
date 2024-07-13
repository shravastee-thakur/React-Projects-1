import React, { useState } from "react";

const Star = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };
  return (
    <main className="container">
      <div className="box">
        {[...Array(5)].map((item, index) => {
          return (
            <div key={index} onClick={() => handleClick(index)}>
              <i
                className={`fa-solid fa-star star ${
                  index < rating ? "yellow" : "gray"
                }`}
              ></i>
            </div>
          );
        })}
      </div>

      {/* rating */}
      <div className="ratingBox">
        <div className="wrapper">
          <p className="rating">{rating}</p>
          <p className="text">Rating</p>
        </div>
      </div>
    </main>
  );
};

export default Star;
