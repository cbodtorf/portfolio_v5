import React, { Component } from "react";
import { Container } from "../../components/Grid";
import ProjectGridItem from "../../components/ProjectGridItem";
import ProjectData from "./ProjectData";

class Work extends Component {
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    const projects = ProjectData.map((project, idx) => {
      let randUnicode = String.fromCharCode("0x" + 29 + this.getRandomInt(0, 255).toString(16))

      return (
        <ProjectGridItem
          key={ project.name }
          index={ randUnicode }
          name={ project.name }
          img_src={ project.img_src }
          mockup_src={ project.mockup_src }
          tech={ project.tech }
          url={ project.url ? project.url : "" }
          github={ project.github ? project.github : "" }
          description={ project.description }
          unicode={ randUnicode }
        />
      )
    })

    return (
      <div className="page-background modal-container">
        <Container fluid>
          <section id="portfolio" className="page--portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="vericaltext">Thangs</h2>
                    </div>
                </div>
                <div className="grid-uniform">
                  <div className="project-list nine-tenths push--one-tenth">
                    { projects }
                  </div>
                </div>
            </div>
          </section>
        </Container>
      </div>
    );
  }
}

export default Work;
