import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>
<header className="site-header f--main" role="banner">
  <div className="site-header__main grid--full grid--table">
    <div className="grid__item">
      <Link to="/work" itemProp="url">Work</Link>
    </div>
    <div className="grid__item site-header__logo-col text-center">
        <h1 className="site-header__logo" itemScope="" itemType="http://schema.org/Organization">
          <Link to="/" itemProp="url" className="text-align--center">Bodtorf</Link>
        </h1>
    </div>
    <div className="grid__item">
      <Link to="/contact" itemProp="url">Drop a note</Link>
      <span className="px2"> or </span>
      <Link to="/about" itemProp="url">Confessions</Link>
    </div>
  </div>
</header>;

export default Nav;
