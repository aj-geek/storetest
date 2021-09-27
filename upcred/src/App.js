// import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Screen from "./screens/Screen";
import DisItemScreen from "./screens/DisItemScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import CheckOutScreen from "./screens/CheckOutScreen";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container className="py-3">
          <Route path="/home" component={Screen} />
          <Route path="/products/:_id" component={DisItemScreen} />
          <Route path="/cart/:_id?" component={CartScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/checkOutDone" component={CheckOutScreen} />
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
