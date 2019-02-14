import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import classnames from "classnames";
import imgProduct from "../img/imageCard.jpeg";
import imgSmall from "../img/hs_logo2.png";
import Breadcrumbs from "../components/Breadcrumbs";

class ProductDetails extends Component {
  state = {
    activeTab: "1"
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs />
        <Container>
          <Row>
            <Col md="6">
              <Card style={{ border: "transparent" }}>
                <CardImg src={imgProduct} style={{ borderRadius: 0 }} />
              </Card>
            </Col>
            <Col md="6">
              <Card style={{ border: "transparent" }}>
                <h1 style={{ fontWeight: "bold", marginBottom: "10px" }}>
                  3D Puzzle - Rinjani
                </h1>
                <h5
                  style={{
                    fontWeight: "bold",
                    color: "#28a745",
                    marginBottom: "25px"
                  }}
                >
                  Rp 200.000
                </h5>
                <p>
                  If you work hard, you need to hydrate! Check out these new
                  20oz aluminum sports bottles in bright orange, sporting the
                  ILTMS logo!
                </p>
                <ul>
                  <li>20oz. Aluminum Sports Bottles</li>
                  <li>8″ H x 3″ W</li>
                  <li>Twist Cap and strong body</li>
                  <li>BPA Free Single Insulation</li>
                </ul>
                <Form>
                  <FormGroup>
                    <Label>Jumlah</Label>
                    <Input
                      type="select"
                      name="select"
                      id="exampleSelect"
                      style={{ width: "60px" }}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                    </Input>
                  </FormGroup>
                </Form>
                <Button color="success" size="sm" style={{ width: "180px" }}>
                  Tambah ke Keranjang
                </Button>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="1" style={{ marginTop: "10px" }}>
              <CardImg src={imgSmall} />
            </Col>
            <Col md="1" style={{ marginTop: "10px" }}>
              <CardImg src={imgSmall} />
            </Col>
            <Col md="1" style={{ marginTop: "10px" }}>
              <CardImg src={imgSmall} />
            </Col>
            <Col md="1" style={{ marginTop: "10px" }}>
              <CardImg src={imgSmall} />
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 8, offset: 2 }} style={{ marginTop: "30px" }}>
              <Nav style={{ cursor: "pointer" }} tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    Deskripsi
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2"
                    })}
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    Informasi Tambahan
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "3"
                    })}
                    onClick={() => {
                      this.toggle("3");
                    }}
                  >
                    Ulasan
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col md="10">
                      <p>
                        If you work hard, you need to hydrate! Check out these
                        new 20oz aluminum sports bottles in bright orange,
                        sporting the ILTMS logo!
                      </p>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col md="10">
                      <ul>
                        <li>20oz. Aluminum Sports Bottles</li>
                        <li>8″ H x 3″ W</li>
                        <li>Twist Cap and strong body</li>
                        <li>BPA Free Single Insulation</li>
                      </ul>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
