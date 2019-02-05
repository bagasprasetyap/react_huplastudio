import React, { Component } from "react";
import card1 from "../img/card1.jpg";
import card2 from "../img/card2.jpg";
import card3 from "../img/card3.jpg";
import {
  Container,
  Button,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody,
  CardSubtitle
} from "reactstrap";

class Feature extends Component {
  render() {
    return (
      <div>
        <Container>
          <CardDeck>
            <Card>
              <CardImg top width="100%" src={card2} alt="Card image cap" />
              <CardBody>
                <CardTitle
                  style={{
                    fontWeight: "bold",
                    fontSize: "large",
                    textAlign: "center"
                  }}
                >
                  ETALASE
                </CardTitle>
                <CardSubtitle style={{ fontWeight: "bold" }}>
                  Jualan kita!
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button color="success">Beli</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src={card1} alt="Card image cap" />
              <CardBody>
                <CardTitle
                  style={{
                    fontWeight: "bold",
                    fontSize: "large",
                    textAlign: "center"
                  }}
                >
                  Print
                </CardTitle>
                <CardSubtitle style={{ fontWeight: "bold" }}>
                  Print desain anda!
                </CardSubtitle>
                <CardText>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </CardText>
                <Button color="success">Cetak</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src={card3} alt="Card image cap" />
              <CardBody>
                <CardTitle
                  style={{
                    fontWeight: "bold",
                    fontSize: "large",
                    textAlign: "center"
                  }}
                >
                  Material
                </CardTitle>
                <CardSubtitle style={{ fontWeight: "bold" }}>
                  Bahan-bahan 3D Print!
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </CardText>
                <Button color="success">Pelajari</Button>
              </CardBody>
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default Feature;
