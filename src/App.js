import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import ProductList from "./components/ProductList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/etalase" component={ProductList} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
