import React from "react";

const IndexPage = () => (
  <div>
    <main>
      <div className="left">
        <h1>I am a good looking Frontend Developer</h1>
        <a href="#" className="btn">
          Learn More
        </a>
      </div>
      <div className="right">
        <img
          src="http://via.placeholder.com/350x600"
          className="img-responsive"
          alt=""
        />
      </div>
    </main>
    <section className="about">
      <h2>About</h2>
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          vitae facilis id repudiandae mollitia nesciunt commodi nostrum.
          Placeat eaque perferendis libero temporibus voluptatibus maiores
          deleniti, esse eos laudantium eveniet aspernatur ut soluta quia, quos
          exercitationem. Vero, possimus rem molestiae tenetur optio hic
          repellat cumque deserunt doloremque autem praesentium sit quae.
        </p>
        <img src="http://via.placeholder.com/300x300" alt="" />
      </div>
    </section>
    <hr />
    <section className="work">
      <h2>Work</h2>
      <div className="container">
        <ul>
          <li>
            <div className="description">
              👨‍💻
              <strong>Frontend Developer</strong> - rTaiwanr
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                nobis.
              </p>
            </div>
            <div className="time">2018-current</div>
          </li>
          <li>
            <div className="description">
              👨‍💻
              <strong>Frontend Developer</strong> - Glory Info
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                nobis.
              </p>
            </div>
            <div className="time">2017-2018</div>
          </li>
        </ul>
      </div>
    </section>
    <hr />
    <section className="skills">
      <h2>Skills</h2>
      <div className="container">
        <ul>
          <li>
            <b>Languages</b> - HTML, CSS, Javascript, Node, PHP
          </li>
          <li>
            <b>Frameworks</b> - React, Vue
          </li>
          <li>
            <b>Others</b> - MongoDB, Firebase, PostCSS, SCSS
          </li>
        </ul>
      </div>
    </section>
  </div>
);

export default IndexPage;
