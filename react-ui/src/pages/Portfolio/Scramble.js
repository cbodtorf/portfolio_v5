import React, { Component } from "react";
import parallaxis from 'parallaxis'
import Timeout from '../../utilities/Timeout';
import TextScramble from '../../utilities/_scramble.js'

class Scramble extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      verbs: [
        'Inspires',
        'Empowers',
        'Challenges',
        'Organizes',
        'Loves',
        'Codes',
        'Plays Music With',
        'Challenges'
      ],
      nouns: [
        'Creativity',
        'The Team',
        'Everything',
        'Stuff by Color',
        'Randomizers',
        'Like a damn boss',
        'Sexbruise?',
        'The Game'
      ]
    }
  }

  componentDidMount() {

    const el = document.querySelector('.verb')
    const el2 = document.querySelector('.noun')
    const fx = new TextScramble(el)
    const fx2 = new TextScramble(el2)
    let that = this;

    let next = function() {
      fx.setText(that.state.verbs[that.state.counter]).then(function() {
        that.props.setTimeout(next, 2000)
      })
      fx2.setText(that.state.nouns[that.state.counter])
        // make sure component is mounted.
        if (that.refs.ScrambleRef) {
          that.setState({
            counter: (that.state.counter + 1) % that.state.verbs.length
          })
        }
    }

    next()
  }

  render() {
    parallaxis()

    return (
      <section ref="ScrambleRef" className="scramble-headline featured-content section section--scramble-headline py4">
        <div className="wrapper section--wrapper">

          <h2
            className="js-parallaxis title-color featured-content__title featured-content__title--large f--title m0 px1"
            data-start="0"
            data-end="1200"
            data-translatex-start="0"
            data-translatex-end="-300"
            data-translatey-start="0"
            data-translatey-end="250"
            >
            <div className="">Caleb</div>
          </h2>
          <h2
            className="verb js-parallaxis title-color featured-content__title featured-content__title--large f--title m0 px1"
            ref={ this.verb }
            data-start="0"
            data-end="1200"
            data-translatex-start="0"
            data-translatex-end="-200"
            data-translatey-start="0"
            data-translatey-end="250"
            >
            <div className="">Inspires</div>
          </h2>
          <h2
            className="noun js-parallaxis title-color featured-content__title featured-content__title--large f--title m0 px1"
            data-start="0"
            data-end="1200"
            data-translatex-start="0"
            data-translatex-end="-100"
            data-translatey-start="0"
            data-translatey-end="250"
            >
            <div className="">Creativity</div>
          </h2>

        </div>
        {/*
        <div
          data-start="0"
          data-end="1000"
          data-translatey-start="0"
          data-translatey-end="300"
          className="scroll js-parallaxis">
          <div className="scroll__container">
            <div className="scroll__wrapper">
              <svg width="21" height="21" viewBox="0 0 21 21" className="svg svg--arrow">
                <polygon id="Shape" fill="#1a1427" transform="translate(10.500000, 10.500000) rotate(-180.000000) translate(-10.500000, -10.500000) " points="21 10.49 10.474 0 9.588 0.889 18.549 9.872 0 9.872 0 11.128 18.549 11.128 9.588 20.111 10.474 21"></polygon>
              </svg>
              <span className="title-color">Scroll</span>
            </div>
          </div>
        </div>
        */}
      </section>
    )
  }

}

export default Timeout(Scramble);
