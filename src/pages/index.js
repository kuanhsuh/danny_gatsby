import React from "react";

const IndexPage = () => (
  <div>
    <main className="moss">
      <div className="left">
        <h1>
          Hi I am Danny. I'm a frontend develop from Taiwan. <br />
          <span>Frontend Developer / Wordpress</span>
        </h1>
        <a href="#about" className="btn">
          Learn More
        </a>
      </div>
    </main>
    <section id="about" className="about">
      <h2>About</h2>
      <div className="container">
        <div>
          <p className="mb10">
            I started coding just 2017 and landed first job after doing
            100codeChallenge.
          </p>
          <p className="mb10">
            I have build web sites, CMS, e-commerces, and web applications for
            startup, small business. (link to portfolio).
          </p>
          <p className="mb10">
            However, working with React and Wordpress are my expertises. I also
            enjoy sharing my knowledge, I have a coding youtube channel and as
            well as a blog.
          </p>
        </div>
        <img
          src="https://avatars0.githubusercontent.com/u/10923300?s=460&v=4"
          alt="Profile Picture"
          style={{ maxWidth: "300px" }}
        />
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
                - Worked with React, Redux, and Storybook <br />
                - Familiar with git and git flow <br />
                - Used modern css such as CSS Grid and CSS Flexbox
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
                - Worked with React, Vue, Vuex <br />
                - Familiar with SVN version controls <br />
                - Used old school CSS such as floats
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
