import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={ Portfolio } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/contact" component={ Contact } />
            <Route exact path="/work" component={ Work } />
            <Route component={ NoMatch } />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
