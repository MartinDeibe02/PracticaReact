import React, {useState} from 'react'
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import nike from '../images/nike.png';
import Usericon from '@mui/icons-material/AccountCircle';
import PassIcon from '@mui/icons-material/VpnKey';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom";


export const Login = () => {
  return (

<div>
  <Navbar/>
      <div className="container mt-2 mb-2">
        <div className="row d-flex flex-row justify-content-center align-items-center">
          <div className="col-lg-12">
            <div className="card text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                <div className="d-flex col-8-md align-items-center">
                    <img
                      src={nike}
                      className="img-fluid"
                      alt="Sample"
                    ></img>
                  </div>
                  <div className='d-flex col flex-column justify-content-center '>
                    <p className="text-center h1 fw-bold mb-5 mt-4">
                      LogIn
                    </p>

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                        <label className="form-label" for="form3Example1c">
                        <Usericon/>&nbsp;Nombre
                          </label>
                          <input
                            type="text"
                            id="nombre"
                            className="form-control"
                          />
                          
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                        <label className="form-label" for="form3Example3c">
                        <MailIcon/>&nbsp; Correo
                          </label>
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"

                          />
                          
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                        <label className="form-label" for="form3Example4c">
                        <PassIcon/>&nbsp;Contraseña
                          </label>
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"

                          />
                        </div>
                      </div>

                    

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">
                          LogIn
                        </button>
                      </div>
                    </form>
                    <div>
                      No tienes cuenta?
                      <Link to='/signUp'>Entra aqui</Link>
                    </div>
                    <br></br>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <Footer/>
      </div>
      
  );
};
