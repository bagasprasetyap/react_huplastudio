import React, { Component } from "react";
import { Link } from "react-router-dom";
import hslogo from "../img/hs_logo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
  Media
} from "reactstrap";

class Navigation extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Navbar light fixed expand="md">
            <NavbarBrand href="/">
              <Media
                src={hslogo}
                style={{
                  height: "45px",
                  width: "45px",
                  borderRadius: "50%",
                  marginRight: "10px"
                }}
                left
              />
              Hupla Studio
            </NavbarBrand>

            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/etalase">Etalase</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/biaya">Biaya</NavLink>
                </NavItem>
                <NavItem style={{ margin: "6px" }}>
                  <Link to="/register">
                    <Button outline color="success" size="sm">
                      Daftar
                    </Button>
                  </Link>
                </NavItem>
                <NavItem style={{ margin: "6px" }}>
                  <Link to="/login">
                    <Button color="success" size="sm">
                      Masuk
                    </Button>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </React.Fragment>
    );
  }
}

export default Navigation;
