import React from "react";
import "./card.scss";

const Card = ({ title, description, link, linkTxt }) => (
  <div className="card">
    <div className="img-container">
      <img
        src="http://via.placeholder.com/550x350"
        className="img-responsive"
        alt=""
      />
    </div>
    <div className="card__description">
      <h3 className="mb10">{title}</h3>
      <p className="mb-auto">{description}</p>
      <a href="#" className="btn-outline">
        {linkTxt}
      </a>
    </div>
  </div>
);

export default Card;
