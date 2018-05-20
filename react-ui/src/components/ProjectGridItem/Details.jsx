import React, { Component } from "react";
import findByType from '../../utilities/findByType';

// We instantiate the Title sub-component
const Title = () => null;
const Body = () => null;
const Footer = () => null;

class Details extends Component {
  static Title: Function;
  static Body: Function;
  static Footer: Function;

  // This is the function that will take care of rendering our Title sub-component
  renderTitle() {
    const { children } = this.props;
    // First we try to find the Title sub-component among the children of Details
    const title = findByType(children, Title);
    // If we don’t find any we return null
    if (!title) {
      return null;
    }
    // Else we return the children of the Title sub-component as wanted
    return <div>{ title.props.children }</div>;
  }

  renderBody() {
    const { children } = this.props;
    const body = findByType(children, Body);
    if (!body) {
      return null;
    }
    return <div>{ body.props.children }</div>;
  }

  renderFooter() {
    const { children } = this.props;
    const footer = findByType(children, Footer);
    if (!footer) {
      return null;
    }
    return <div>{ footer.props.children }</div>;
  }

  render() {

    return (
      <div className={`details ten-tenths ${this.props.show ? "show" : ""}`}>
        <div>
          <h2 className="details-project-title">
           { this.renderTitle() }
         </h2>
          <div>
           { this.renderBody() }
          </div>
          <div>
           { this.renderFooter() }
          </div>
        </div>
      </div>
    );
  }
}

// Lastly we expose the Title sub-component through Details
Details.Title = Title;
Details.Body = Body;
Details.Footer = Footer;

export default Details;
