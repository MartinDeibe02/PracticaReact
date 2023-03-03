import { Login } from "./components/Login";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddJersey } from "./components/AddJersey";
import { Home } from "./components/Home";
import { SignUp } from "./components/SignUp";
import {
  /*ProductosContext,*/
  ProductosContextProvider,
} from "./global/ProductosContext";

export class App extends Component {
  render() {
    return (
      <ProductosContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/addJersey" element={<AddJersey />} />
            <Route exact path="/signUp" element={<SignUp />} />
            <Route exact path="/logIn" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ProductosContextProvider>
    );
  }
}

export default App;
