import React from 'react'
import '../css/Home.css'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { kobe } from '../images/kobe.png'

import 'bootstrap/dist/css/bootstrap.min.css';

export const AboutUS = () => {
  return (
    <div>
        <Navbar/>

        <div className='row mt-5 d-flex justify-content-between'>
            <div className='col d-flex flex-column align-items-center'>
                <h2>Jersey</h2>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur

                    </p>
                </div>

            </div>
            <div className='col d-flex flex-column align-items-center'>
                <h2>NBA</h2>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                        
                    </p>
                </div>

            </div>
            <div className='col fw-bold d-flex justify-content-center'>
            <div className='col d-flex flex-column align-items-center'>
                <h2>Nike</h2>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                        
                    </p>
                </div>

            </div>
            </div>
            <img src='{kobe}'></img>
        </div>
        <Footer/>
    </div>
  )
}
