import React, { Component } from "react";
import faker from "faker";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row
} from "reactstrap";
import ProductCard from "../components/ProductCard";
import Breadcrumbs from "../components/Breadcrumbs";

class ProductList extends Component {
  state = {
    products: [],
    isLoading: false,
    dropdownOpen: false
  };

  componentDidMount() {
    var productsTemp = [];
    this.setState({
      isLoading: true
    });
    for (var i = 1; i < 20; i++) {
      productsTemp.push({
        productId: i,
        productName: faker.commerce.productName(),
        productPrice: faker.commerce.price(),
        merchantName: faker.name.firstName(),
        productImage: faker.image.avatar()
      });
    }
    this.setState({
      products: productsTemp,
      isLoading: false
    });
  }

  displayProducts = () => {
    return this.state.products.map((value, index) => {
      return (
        <ProductCard
          productName={value.productName}
          productPrice={value.productPrice}
          merchantName={value.merchantName}
          productImage={value.productImage}
          key={index}
        />
      );
    });
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs />
        <div className="container">
          <h4 style={{ textAlign: "left" }}>Etalase</h4>
          <Dropdown
            isOpen={this.state.dropdownOpen}
            size="md"
            toggle={this.toggle}
            style={{ textAlign: "right", margin: "1.5rem 0rem" }}
          >
            <DropdownToggle caret outline color="secondary">
              Urutkan
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Paling Sesuai</DropdownItem>
              <DropdownItem>Terbaru</DropdownItem>
              <DropdownItem>Harga Tertinggi</DropdownItem>
              <DropdownItem>Harga Terendah</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Row>{this.displayProducts()}</Row>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
