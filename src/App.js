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
import {auth,db} from './config/config'
import { AboutUS } from "./components/AboutUS";
import { CarritoContextProvider } from "./global/CarritoContext";
import { Carrito } from "./components/Carrito";
import { Detalle } from "./components/Detalle";


export class App extends Component {
  state={
    user: null
  }

  componentDidMount(){
    
    auth.onAuthStateChanged(user=>{
      if(user){
        db.collection('Usuarios').doc(user.uid).get().then(snapshot=>{
          this.setState({
            
            user: snapshot.data().Nombre

          })
          console.log(user);

        })
      }else{
        this.setState({
          user: null
        })
      }
    })
  }


  render() {
    
    return (
      <ProductosContextProvider>
        <CarritoContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/productos" element={<Home user={this.state.user}/>} />
            <Route exact path="/cart" element={<Carrito user={this.state.user}/>} />
            <Route  path="/addJersey" element={<AddJersey />} />
            <Route  path="/" element={<AboutUS user={this.state.user}/>} />
            <Route  path="/signUp" element={<SignUp />} />
            <Route  path="/logIn" element={<Login />} />
            <Route  path="/detalle" element={<Detalle />} />
          </Routes>
        </BrowserRouter>
        </CarritoContextProvider>
      </ProductosContextProvider>
    );
  }
}

export default App;
