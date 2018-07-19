import React from "react";
import PropTypes from "prop-types";

const Header = ({ text, type }) => {
  let bgClass = "background";
  if (type) bgClass += ` ${type}`;
  return (
    <header>
      <div className={bgClass} />
      <h1>{text}</h1>
    </header>
  );
};

Header.propTypes = {
  text: PropTypes.string,
  bgClass: PropTypes.oneOf(["mojito", "rainbow"])
};

export default Header;
