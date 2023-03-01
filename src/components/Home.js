import React from 'react'
import '../css/Home.css'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Products } from './Products'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
  return (
    <div className='homeCss'>
        <Navbar/>
        <Products/>
        <Footer/>
    </div>  
    )
}


