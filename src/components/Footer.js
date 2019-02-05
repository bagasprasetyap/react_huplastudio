import React, { Component } from "react";
import hslogo from "../img/hs_logo.png";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Media
} from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <div>
        <Container style={{ marginTop: "30px" }}>
          <Row>
            <Col>
              <ListGroup>
                <ListGroupItem>
                  <center>
                    <Media
                      src={hslogo}
                      style={{
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                        marginRight: "10px"
                      }}
                      left
                    />
                    Hupla Studio
                  </center>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
