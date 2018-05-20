import React, { Component } from "react";
import screenPrintsImages from '../../components/ScreenPrints';
import { TweenMax, Power2, Circ } from 'gsap';

import ScrollMagic from '../../utilities/ScrollMagic'

const screenPrintBlocks = screenPrintsImages.map((img, index) => {
  return (
    <div key={ index } className={`img-wrapper ${index === 0 ? "firstImg" : ""}`}>
      <div className="img-bkg">
          <img src={ img } alt="screen print layer" />
      </div>
    </div>
  );
})
const description = "Worked with a visual artist to explain the process of converting a painting into a screen print. We broke the painting up into layers that could be isolated by color. We wanted to promote this release with a unique landing page full of animations."

class Raven extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <section className="section bg--section section--raven landing-page py4 pin">
        <div className="wrapper section--wrapper">

          <h2 className="t--section-title text-align--center f--main font-size--l lg--font-size--xl m0 mb3">
          <a href="https://ravenroxanne.com/pages/botanical-series-screen-prints" rel="noopener noreferrer" target="_blank">Project: Raven</a>
          </h2>

          <div className="screen-print--scroll-wrapper">
            <div className="screen-print--screens">

              { screenPrintBlocks }

            </div>
            {/* Only on screens larger than 1000px */}
            <div className="screen-print--description animation-desc">
              <h4>SCREEN PRINTING</h4>
              <p>
                { description }
              </p>
            </div>
            {/* Only on screens smaller than 1000px */}
            <div className="screen-print--description static-desc">
              <h4>SCREEN PRINTING</h4>
              <p>
                { description }
              </p>
            </div>
          </div>

        </div>
      </section>
    )
  }
}


export default Raven;
