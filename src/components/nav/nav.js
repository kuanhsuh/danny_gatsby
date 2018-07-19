import React from "react";
import Link from "gatsby-link";
import logo from "assets/logo.png";

const Nav = props => (
  <nav>
    <div className="logo-container">
      <a href="#">
        <img src={logo} alt="" className="img-responsive" />
      </a>
    </div>
    <ul>
      <li>
        <Link to="/">🏠Home</Link>
      </li>
      <li>
        <Link to="/portfolio">🔍Portfolio</Link>
      </li>
      <li>
        <Link to="/contact">✉️Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
