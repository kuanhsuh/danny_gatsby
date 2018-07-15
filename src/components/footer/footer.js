import React from "react";
import "./footer.scss";
import sprite from "assets/sprite.svg";

const Footer = props => (
  <footer>
    <div className="icons">
      <a href="http://github.com/kuanhsuh">
        <svg className="icon">
          <use xlinkHref={`${sprite}#icon-github`} />
          {/* <use xlinkHref="#icon-github" /> */}
        </svg>
      </a>
      <a href="https://www.facebook.com/dannyhuang24">
        <svg className="icon">
          {/* <use xlinkHref="#icon-facebook" /> */}
          <use xlinkHref={`${sprite}#icon-facebook`} />
        </svg>
      </a>
      <a href="https://www.youtube.com/user/kuanhsuh">
        <svg className="icon">
          {/* <use xlinkHref="#icon-youtube" /> */}
          <use xlinkHref={`${sprite}#icon-youtube`} />
        </svg>
      </a>
    </div>
    <p>Copyright © 2018 Danny Huang demo</p>
  </footer>
);

export default Footer;
