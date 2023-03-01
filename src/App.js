import React, { Component } from 'react'
import {BrowserRouter, Routes , Switch, Route} from 'react-router-dom';
import { Home } from './components/Home';

export class App extends Component {
  render() {
    return (
      <Home/>
      
    )
  }
}

export default App