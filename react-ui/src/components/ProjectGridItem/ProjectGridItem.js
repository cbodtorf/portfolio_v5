import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import TechStack from "./TechStack";
import Details from "./Details";

class ProjectGridItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }
  }

   close = () => {
     console.log('close!')
     document.querySelector(".modal-container").classList.remove("modal-open");
     this.setState({ showModal: false });
   }

   open = () => {
     document.querySelector(".modal-container").classList.add("modal-open");
     (function smoothscroll(){
          var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
               window.requestAnimationFrame(smoothscroll);
               window.scrollTo (0,currentScroll - (currentScroll/5));
          }
      })();
     this.setState({ showModal: true });
   }

  render() {
    console.log("this", this)
    let websiteLink = <Link to={ this.props.url } target="_blank">Website </Link>
    if (this.props.url === "") {
      websiteLink = ""
    }

    let githubLink = <Link to={ this.props.github } target="_blank"> Github</Link>
    if (this.props.github === "") {
      githubLink = ""
    }

    return (
      <div className="grid__item one-whole">
        <div className="work-item">
          <div className="portfolio-item">
            <span className="item-index">{ this.props.index }</span>
              <div onClick={ this.open  } className="portfolio-link">
                  <div className="caption">
                      <div className="caption-content">
                          <TechStack tech={ this.props.tech }/>
                      </div>
                  </div>
                  <div className="marquee">
                    <h3><span>{ this.props.name }</span><span>{ this.props.name }</span></h3>
                  </div>
                  {/* <img src={this.props.img_src} className="img-responsive img-centered" alt={this.props.name} /> */}
              </div>
          </div>
        </div>

        <Details show={ this.state.showModal } onHide={ this.close } container={ this }>
          <Details.Title>
            <a href={ this.props.url.length > 1 ? this.props.url : "#"} >{ this.props.name }</a>
          </Details.Title>
          <Details.Body>
            <div><img src={ this.props.mockup_src }></img></div>
            <h5>Deets</h5>
            <div>{ this.props.description }</div>
            { websiteLink} {`${this.props.url.length > 1 && this.props.github.length > 1 ? ' | ' : ''}`} { githubLink }
          </Details.Body>
          <Details.Footer>
            <Button className="details-close-btn" onClick={ this.close }>Close</Button>
          </Details.Footer>
        </Details>
      </div>
    );
  }

}

export default ProjectGridItem;
