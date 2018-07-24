import React from "react";
import Header from "components/header/header";
import Card from "components/card/card";
import { portfolios } from "./portfolios.js";

const Portfolio = () => (
  <aux>
    <Header text="portfolio" type="mojito" />
    <div className="portfolio">
      {portfolios.map(portfolio => {
        console.log(portfolio.imgSrc);
        return (
          <Card
            imgSrc={portfolio.imgSrc}
            title={portfolio.title}
            description={portfolio.description}
            link={portfolio.link}
            linkTxt={portfolio.linkTxt}
          />
        );
      })}
    </div>
  </aux>
);

export default Portfolio;
