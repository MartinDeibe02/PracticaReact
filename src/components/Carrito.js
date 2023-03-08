import React, { useContext } from 'react'
import { CarritoContext } from '../global/CarritoContext'
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import '../css/cart.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/config';
import { useEffect } from 'react';

export const Carrito = ({user}) => {
    const { carritoCompra,dispatch, precioTotal, totalProds } = useContext(CarritoContext);

    const history = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) {
                history.push('/login');
            }
        })
    })
  return (
    
    <div>
        <Navbar user={user}/>

        <section class="h-100 h-custom">
        <div class="container py-5">
              <div class="card card-registration card-registration-2">
                <div class="card-body">
                  <div class="row ">
                    <div class="col-lg-8">
                      <div class="p-5">
                        <div class="d-flex justify-content-between align-items-center mb-5">
                          <h1 class="fw-bold mb-0 text-black">Carrito compra</h1>
                        </div>

      
                        <hr class="my-4"></hr>
      
                        {carritoCompra && carritoCompra.map(jersey => (

                        <div class="row mb-4 d-flex justify-content-between align-items-center">
                          <div class="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={jersey.JerseyImage}
                              class="img-fluid rounded-3" alt="Cotton T-shirt"></img>
                          </div>
                          <div class="col-md-3 col-lg-3 col-xl-3">
                            <h6 class="text-muted">Jersey</h6>
                            <h6 class="text-black mb-0">{jersey.JerseyName}</h6>
                          </div>
                          <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button class="btn btn-link px-2"><ArrowBackIcon/>
                            </button>
      
                            <input id="form1" min="0" name="quantity" value="1" type="number"
                              class="form-control mt-2 form-control-sm" />
      
                            <button class="btn btn-link px-2"><ArrowForwardIcon/>
                            </button>
                          </div>
                          <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 class="mb-0">{jersey.JerseyPrice} $</h6>
                          </div>
                          <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" class="text-muted"><DeleteForeverIcon/></a>
                          </div>
                        </div>

      
                        ))}
                        <div class="pt-5">
                          <h6 class="mb-0"><a href="#!" class="text-body"><ArrowBackIcon/>Volver a productos</a></h6>
                        </div>
                      </div>
                    </div>
                        
                    
                    <div class="col-lg-4 bg-grey">
                      <div class="p-5">
                        <h3 class="fw-bold mb-5 mt-2 pt-1">Comprar</h3>
                        <hr class="my-4"></hr>
      
      
                        <h5 class="text-uppercase mb-3">Envio</h5>
      
                        <div class="mb-4 pb-2">
                          <select class="select">
                            <option value="1">Standard</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                          </select>
                        </div>
      
                        <h5 class="text-uppercase mb-3">Codigo descuento</h5>
      
                        <div class="mb-5">
                          <div class="form-outline">
                            <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                          </div>
                        </div>
      
                        <hr class="my-4"></hr>
      
                        <div class="d-flex justify-content-between mb-5">
                          <h5 class="text-uppercase">Precio total</h5>
                          <h5>{precioTotal} $</h5>
                        </div>
      
                        <button type="button" class="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark">Register</button>
      
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer/>
    </div>
  )
}
