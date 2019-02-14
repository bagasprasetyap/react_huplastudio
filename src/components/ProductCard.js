import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Col
} from "reactstrap";

class ProductCard extends Component {
  render() {
    const {
      id,
      productImage,
      productName,
      productPrice,
      merchantName,
      index
    } = this.props;

    return (
      <React.Fragment>
        <Col md="6" lg="3">
          <Card
            style={{
              fontSize: 14,
              marginBottom: 20,
              border: "transparent"
            }}
            key={index}
          >
            <a href={"/etalase/" + id}>
              <CardImg
                style={{
                  borderRadius: 0
                }}
                src={productImage}
              />
            </a>

            <CardBody style={{ padding: "0.5rem" }}>
              <CardTitle style={{ fontWeight: "bold", marginBottom: "0.2rem" }}>
                {productName}
              </CardTitle>
              <CardText style={{ color: "#28a745", marginBottom: "0.2rem" }}>
                Rp {productPrice}
              </CardText>
              <CardSubtitle className="text-right">
                Desain oleh {merchantName}
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}

export default ProductCard;
