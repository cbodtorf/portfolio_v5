import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from "axios";


class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    sent: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.email && this.state.message) {
      return axios.post('/sendemail', {
        from: this.state.email,
        to: "cbodtorf@gmail.com",
        subject: this.state.name+" has sent you a message from your website!",
        text: this.state.message
      })
        .then(res => this.setState({name: "", email: "", message: "", sent: true}))
        .catch(err => console.log(err));
    }
  };

  render() {

    return (
      <div className="page-background">
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="vericaltext">Drop a Note</h2>
                    </div>
                </div>
                <div className="grid-uniform">
                  <div className="grid__item push--one-tenth nine-tenths">
                    <form name="sentMessage" id="contactForm" noValidate>
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label htmlFor="ContactFormName" className="hidden-label f--main block mt2">Name</label>
                                <Input
                                type="text"
                                id="ContactFormName"
                                className="form-control full--w input-underline input-underline--primary"
                                placeholder="Name"
                                name="name"
                                value={ this.state.name }
                                onChange={ this.handleInputChange }
                                required data-validation-required-message="Please enter your name."
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label htmlFor="ContactFormEmail" className="hidden-label f--main block mt2">Email</label>
                                <Input
                                id="ContactFormEmail"
                                type="email"
                                className="form-control full--w input-underline input-underline--primary"
                                placeholder="Email Address"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                required data-validation-required-message="Please enter your email address."
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls" id="emailmsg">
                                <label htmlFor="ContactFormMessage" className="hidden-label f--main block my2">Message</label>
                                <TextArea
                                id="ContactFormMessage"
                                rows="5"
                                className="form-control full--w input-underline input-underline--primary input-underline--textarea"
                                placeholder="Message"
                                name="message"
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                required data-validation-required-message="Please enter a message."
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <br />
                        <div id="success"></div>
                        <div className="row">
                          <div className="form-group col-xs-12">
                            <FormBtn
                              disabled={!(this.state.name && this.state.email && this.state.message)}
                              onClick={this.handleFormSubmit}
                            >
                              Send
                            </FormBtn>
                                {this.state.sent && <span id="message">  Your message has been sent!</span>}
                          </div>
                        </div>
                    </form>
                  </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default Contact;
