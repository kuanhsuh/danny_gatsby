import React from "react";
import Header from "components/header/header";
// import Card from "components/card/card";
// import { portfolios } from "./portfolios.js";

const Portfolio = () => (
  <div>
    <Header text="portfolio" type="mojito" />
    <div className="portfolio">
      <div className="card">
        <div className="img-container">
          <img
            src="http://via.placeholder.com/350x150"
            className="img-responsive"
            alt="placeholder"
          />
        </div>
        <div className="card__description">
          <h3 className="mb10">title</h3>
          <p className="mb-auto">description</p>
          <a href="#" className="btn-outline">
            Github
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;
