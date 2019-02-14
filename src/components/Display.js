import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Button } from "reactstrap";

class Display extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <h1 className="display-3">Hupla Studio</h1>
            <p className="lead">Bikin desain anda sendiri!</p>
            <hr className="my-3" />
            <Link to="register">
              <Button color="success">Daftar</Button>
            </Link>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Display;
