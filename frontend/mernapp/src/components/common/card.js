import React from "react";
import "./card.css";

const Card = ({ title, description, buttonText, color, onClick }) => {
  return (
    <div className="card" style={{ background: color }}>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="card-btn" onClick={onClick}>{buttonText}</button>
    </div>
  );
};

export default Card;
