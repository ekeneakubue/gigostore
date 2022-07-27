import React from "react";
import "./Card.css";

function Card({ src, title, description, price }) {
  return (
    <section>
      <div className="card">
        <img src={src} alt="" />
        <div className="card__info">
          <h2>{title}</h2>
          <h4>{description}</h4>
          <h3>{price}</h3>
        </div>
      </div>

      <div className="card2">
        <img src={src} alt="" />
        <div className="card__info">
          <h2>{title}</h2>
          <h4>{description}</h4>
          <h3>{price}</h3>
        </div>
      </div>
    </section>
  );
}

export default Card;
