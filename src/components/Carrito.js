import React, { useContext } from 'react'
import { CarritoContext } from '../global/CarritoContext'
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import '../css/cart.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link, useNavigate } from 'react-router-dom';
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

        <section className="h-100 h-custom">
        <div className="container py-5">
              <div className="card card-registration card-registration-2">
                <div className="card-body">
                  <div className="row ">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">Carrito compra</h1>
                        </div>

      
                        <hr className="my-4"></hr>
      
                        {carritoCompra && carritoCompra.map(jersey => (

                        <div className="row mb-4 d-flex justify-content-between align-items-center" key={jersey.JerseyID}>
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={jersey.JerseyImage}
                              className="img-fluid rounded-3" alt="Cotton T-shirt"></img>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">Jersey</h6>
                            <h6 className="text-black mb-0">{jersey.JerseyName}</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button className="btn btn-link px-2"><ArrowBackIcon  style={{ color: 'red' }}/>
                            </button>
      
                            <input id="form1" min="0" name="quantity" value='1' type="number"
                              className="form-control mt-2 form-control-sm"></input>
      
                            <button className="btn btn-link px-2"><ArrowForwardIcon  style={{ color: 'red' }}/>
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">{jersey.JerseyPrice} $</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <Link href="#!" className="text-muted"><DeleteForeverIcon/></Link>
                          </div>
                        </div>

      
                        ))}
                        <div className="pt-5">
                          <h6 className="mb-0"><Link to='/productos' className="text-body"><ArrowBackIcon  style={{ color: 'red' }}/>Volver a productos</Link></h6>
                        </div>
                      </div>
                    </div>
                        
                    
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Comprar</h3>
                        <hr className="my-4"></hr>
      
      
                        <h5 className="text-uppercase mb-3">Envio</h5>
      
                        <div className="mb-4 pb-2">
                          <select className="select">
                            <option value="1">Standard</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                          </select>
                        </div>
      
                        <h5 className="text-uppercase mb-3">Codigo descuento</h5>
      
                        <div className="mb-5">
                          <div className="form-outline">
                            <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                          </div>
                        </div>
      
                        <hr className="my-4"></hr>
      
                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Precio total</h5>
                          <h5>{precioTotal} $</h5>
                        </div>
      
                        <button type="button" className=" button btn btn-block btn-lg">Register</button>
      
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
