import React from "react";
import FruitPattern from "../../images/Fruit-Pattern.jpg"
import Bamboo_Fe from "../../images/bamboo_fe.jpg"
import Bamboo_Be from "../../images/bamboo_be.jpg"

const Bamboo = (props) => (
  <section className="section bg--section section--bamboo landing-page py4 pin" style={{backgroundImage: `url(${FruitPattern})`}}>
    <div className="wrapper section--wrapper">

      <h2 className="t--section-title text-align--center f--main font-size--l lg--font-size--xl m0 mb3">
      <a href="https://bamboojuices.com" rel="noopener noreferrer" target="_blank">Project: Bamboo Juices</a>
      </h2>
      <div>
        Ruby ** Rails ** React ** Heroku ** Shopify ** Liquid
      </div>

      <div className="bamboo--section">
        <img className="bamboo--image front-end" src={ Bamboo_Fe } alt="Bamboo Website"/>
        <div className="bamboo--description">
          Front-end Development for Atlanta based Juice company.
        </div>
      </div>
      <div className="bamboo--section">
        <img className="bamboo--image back-end" src={ Bamboo_Be } alt="Bamboo Admin"/>
        <div className="bamboo--description">
          Back-end Development for Atlanta based Juice company.
        </div>
      </div>

    </div>
  </section>
);

export default Bamboo;
