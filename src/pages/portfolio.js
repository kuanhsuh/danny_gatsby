import React from "react";
import Header from "components/header/header";
import Card from "components/card/card";

import pembridge from "assets/pembridge.png";
import netflix from "assets/netflix.png";
import barsumo from "assets/barsumo.png";

const Portfolio = () => (
  <div>
    <Header text="portfolio" type="mojito" />
    <div className="portfolio">
      <Card
        imgSrc={pembridge}
        title="Pembridge Furniture Store"
        description="Pembridge is a local furniture store. I built a custom wordpress website to help them gain online presence."
        link="http://pembridge.com.tw/"
        linkTxt="Link"
      />
      <Card
        imgSrc={netflix}
        title="Netflix Clone"
        description="This is my side project where I built a netflix-clone. This app has upcoming movie, auto complete, and movie details."
        link="https://github.com/kuanhsuh/netflix-clonev2"
        linkTxt="Github"
      />
      <Card
        imgSrc={barsumo}
        title="Barsumo App"
        description="Barsumo is an ordering platform that simplifies supplier ordering for Bars and Restaurants. I built a feature for them with graphQL."
        link="https://www.barsumo.com/"
        linkTxt="Link"
      />
    </div>
  </div>
);

export default Portfolio;
