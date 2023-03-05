import React from 'react'
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import nike from '../images/nike.png';
import Usericon from '@mui/icons-material/AccountCircle';
import PassIcon from '@mui/icons-material/VpnKey';
import MailIcon from '@mui/icons-material/Mail';

export const SignUp = () => {
  return (
    <div>
          <Navbar />

      <div class="container mt-2 mb-2">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-lg-12">
            <div class="card text-black">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div>
                    <p class="text-center h1 fw-bold mb-5 mt-4">
                      Sign up
                    </p>

                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example1c">
                        <Usericon/>&nbsp;Nombre
                          </label>
                          <input
                            type="text"
                            id="form3Example1c"
                            class="form-control"
                          />
                          
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example3c">
                        <MailIcon/>&nbsp; Correo
                          </label>
                          <input
                            type="email"
                            id="form3Example3c"
                            class="form-control"
                          />
                          
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4c">
                        <PassIcon/>&nbsp;Contraseña
                          </label>
                          <input
                            type="password"
                            id="form3Example4c"
                            class="form-control"
                          />
                        </div>
                      </div>

                    

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" class="btn btn-primary btn-lg">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="d-flex align-items-center">
                    <img
                      src={nike}
                      class="img-fluid"
                      alt="Sample"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
