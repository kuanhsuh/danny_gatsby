import React from "react";
import "styles/portfolioPage.scss";
import Header from "components/header/header";

const aux = props => props.children;

const Portfolio = () => (
  <aux>
    <Header text="portfolio" type="mojito" />
    <div className="portfolio">
      <div className="card">
        <div className="img-container">
          <img
            src="http://via.placeholder.com/550x350"
            className="img-responsive"
            alt=""
          />
        </div>
        <div className="card__description">
          <h3 className="mb10">Lorem ipsum dolor sit.</h3>
          <p className="mb-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            maiores aliquam iste sunt animi minus, similique obcaecati vel.
            Voluptates, sapiente.
          </p>
          <a href="#" className="btn-outline">
            Demo
          </a>
        </div>
      </div>
    </div>
  </aux>
);

export default Portfolio;
