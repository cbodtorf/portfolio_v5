import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>
<header className="site-header f--main" role="banner">
  <div className="site-header__main grid--full hide grid--table md-dn--show">
      <Link className="nav-work" to="/work" itemProp="url">Work</Link>
      <Link className="nav-contact" to="/contact" itemProp="url">Drop a note</Link>
      <Link className="nav-about" to="/about" itemProp="url">Confessions</Link>
  </div>

  <div className="site-header__main grid--full grid--table">
    <div className="grid__item md-dn--hide">
      <Link className="nav-work" to="/work" itemProp="url">Work</Link>
    </div>
    <div className="grid__item site-header__logo-col text-center">
        <h1 className="site-header__logo" itemScope="" itemType="http://schema.org/Organization">
          <Link to="/" itemProp="url" className="text-align--center">Bodtorf</Link>
        </h1>
    </div>
    <div className="grid__item md-dn--hide">
      <Link className="nav-contact" to="/contact" itemProp="url">Drop a note</Link>
      <span className="px2 md-dn--hide"> or </span>
      <Link className="nav-about" to="/about" itemProp="url">Confessions</Link>
    </div>
  </div>
</header>;

export default Nav;
