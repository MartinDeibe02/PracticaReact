import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AddJersey } from './components/AddJersey';
import { Home } from './components/Home';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/addJersey' element={<AddJersey />}/>
        </Routes>
        
      </BrowserRouter>
      
      
    )
  }
}

export default App