import React, { Component } from "react";
import TechIcons from "../ProjectGridItem/TechIcons"
import logo from "../../images/b.svg"

class Footer extends Component {

  render() {
    return (
      <footer className="site-footer small--text-center bg--primary color--primary-overlay f--main" role="contentinfo">
        <div className="wrapper">
          <div className="site-footer__mobile hide md-dn--show">
            <ul className="social-icons social-icons align--middle list-reset inline-block inline-list">
                <li>
                  <a className="social-icons__link color--primary-overlay" rel="noopener noreferrer" target="_blank" href="https://github.com/cbodtorf" title="Bodtorf on Githbub">
                    { TechIcons["github"] }
                  </a>
                </li>
                <li>
                  <a className="social-icons__link color--primary-overlay" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/caleb-bodtorf-5ba36a126" title="Bodtorf on LinkedIn">
                    { TechIcons["linkedin"] }
                  </a>
                </li>
            </ul>
            <ul>
              
            </ul>
          </div>
          <div className="site-footer__desktop md-dn--hide ">
            <div className="grid">
              <div className="grid__item lg--one-quarter  font-size--s">
                <p>© 2018 <a href="/" className=" color--primary-overlay">Bodtorf</a></p>
                <hr className="rule   bg--secondary-accent  m0 my2 text-align--left" />
              </div>
              <div className="grid__item lg--one-half text-align--center">
                <img src={ logo } className="footer-logo img img-responsive img-centered" alt="site logo" />
              </div>
              <div className="grid__item lg--one-quarter text-align--right">
                <ul className="social-icons social-icons align--middle list-reset inline-block inline-list">
                  <li>
                    <a className="social-icons__link color--primary-overlay" rel="noopener noreferrer" target="_blank" href="https://github.com/cbodtorf" title="Bodtorf on Githbub">
                      { TechIcons["github"] }
                    </a>
                  </li>
                  <li>
                    <a className="social-icons__link color--primary-overlay" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/caleb-bodtorf-5ba36a126" title="Bodtorf on LinkedIn">
                      { TechIcons["linkedin"] }
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;
