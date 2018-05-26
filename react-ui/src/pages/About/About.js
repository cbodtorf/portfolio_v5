import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {

  render() {
    return (
      <div className="page-background">
        <section className="" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="vericaltext">Confessions</h2>
                    </div>
                </div>
                <div className="grid-uniform">
                    <div className="grid__item lg--nine-tenths bio-text push--one-tenth">
                        <p>I enjoy pineapple on my pizza...</p>
                        <br/>
                        <p>Also, I am an Agency based full-stack developer with a focus on Ecommerce and Design.</p>
                        <p>Check out my <Link to="/work">projects</Link> page to see the websites/apps that I have created. Please do not hesitate to reach out
                          via the <Link to="/contact">contact form.</Link>
                        </p>

                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default About;
