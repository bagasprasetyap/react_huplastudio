import React, { Component } from "react";
import imgCard from "../img/imageCard.jpeg";
import hslogo from "../img/hs_logo.png";

class ProductCard extends Component {
  render() {
    return (
      <div>
        <div
          className="ui raised link card"
          style={{ width: "240px", height: "80", margin: "10px 5px" }}
        >
          <div className="image">
            <img alt="productImage" src={imgCard} />
          </div>
          <div className="extra content">
            <div className="header">3D Puzzle</div>
            <div className="meta" style={{ color: "#5cb85c	" }}>
              Rp 200.000
            </div>
            <div className="right floated author">
              Desain oleh Hupla Studio
              {/* <img
                className="ui avatar image"
                src={hslogo}
                alt="avatarImage"
                style={{ marginLeft: "5px" }}
              /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
