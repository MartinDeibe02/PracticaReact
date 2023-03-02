import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";



export const Navbar = () => {
  return (
    <div class="hero">

        <nav class="navbar navbar-light bg-transparent navbar-expand-md bg-faded justify-content-center">
            <div class="navbar-brand d-flex w-50 mr-auto logo">NBA <span className="logo2">Store</span> </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
                
                <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
                    <li class="nav-item">
                        <button className="button"><Link to='/login' className='link'>Login</Link></button>
                    </li>
                    <li class="nav-item">
                        <button className="button"><Link to='/signup' className='link'>Signup</Link></button>
                    </li>
                </ul>
            </div>
        </nav>


    </div>


  );
};
