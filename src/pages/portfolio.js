import React from "react";
import Header from "components/header/header";
import Card from "components/card/card";

const aux = props => props.children;

const Portfolio = () => (
  <aux>
    <Header text="portfolio" type="mojito" />
    <div className="portfolio">
      <Card
        title="Sample Title one"
        description="this is a sample description"
        link="https://www.google.com"
        linkTxt="Github"
      />
    </div>
  </aux>
);

export default Portfolio;
