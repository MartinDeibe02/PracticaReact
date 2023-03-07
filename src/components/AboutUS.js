import React from 'react'
import '../css/Home.css'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import  kobe  from '../images/kobe.png'
import '../css/about.css'


import 'bootstrap/dist/css/bootstrap.min.css';

export const AboutUS = () => {
  return (
    <div>
        <Navbar/>

        <div class="container">
            <div class="row">
                <div class="col d-flex justify-content-between align-items-center">
                <div class="col-4-md">
                    <h2>Título 1</h2>
                    <p>Información 1</p>
                </div>
                <div class="col-4-md">
                    <h2>Título 2</h2>
                    <p>Información 2</p>
                </div>
                <div class="col-4-md">
                    <h2>Título 3</h2>
                    <p>Información 3</p>
                </div>
                </div>
            </div>
        </div>

                <div className='row mt-3 back'>
                    <h3>XDDDD</h3>
                </div>
                
        <Footer/>
    </div>
  )
}
