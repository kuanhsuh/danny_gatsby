import React from "react";
import Header from "components/header/header";
import Card from "components/card/card";

const aux = props => props.children;

const Portfolio = () => (
  <aux>
    <Header text="portfolio" type="mojito" />
    <div className="portfolio">
      <Card />
    </div>
  </aux>
);

export default Portfolio;
