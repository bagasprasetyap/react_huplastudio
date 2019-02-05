import React, { Component } from "react";
import Display from "../components/Display";
import Feature from "../components/Feature";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Display />
        <Feature />
      </React.Fragment>
    );
  }
}

export default Home;
