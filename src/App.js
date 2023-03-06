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
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home user={this.state.user}/>} />
            <Route  path="/addJersey" element={<AddJersey />} />
            <Route  path="/signUp" element={<SignUp />} />
            <Route  path="/logIn" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ProductosContextProvider>
    );
  }
}

export default App;
