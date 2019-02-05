import React, { Component } from "react";
import ProductCard from "./ProductCard";

class ProductList extends Component {
  render() {
    return (
      <div>
        <h1>Product List</h1>
        <div className="container">
          <div className="ui fluid cards">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
