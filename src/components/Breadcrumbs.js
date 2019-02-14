import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Breadcrumb } from "reactstrap";

class Breadcrumbs extends Component {
  state = {
    path: ""
  };

  componentDidMount() {
    var initialPath = this.props.path;
    this.setState(initialPath);
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <p>ini Breadcrumb</p>
        </Breadcrumb>
      </React.Fragment>
    );
  }
}

export default Breadcrumbs;
