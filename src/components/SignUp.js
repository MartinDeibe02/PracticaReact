import React, {useState} from 'react'
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import nike from '../images/nba.png';
import Usericon from '@mui/icons-material/AccountCircle';
import PassIcon from '@mui/icons-material/VpnKey';
import MailIcon from '@mui/icons-material/Mail';
import {auth,db} from '../config/config';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";


export const SignUp = () => {

  //Redirect a login
  const history = useNavigate();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //Inserto en base de datos
  const SignUp = (e) =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((credenciales)=>{
      db.collection('Usuarios').doc(credenciales.user.uid).set({
        Nombre: nombre,
        Email: email,
        Password: password
      }).then(()=>{
        setNombre('');
        setEmail('');
        setPassword('');
        setError('');
        history('/login');
      }).catch(err=>setError(err.message));
    }).catch(err=>setError(err.message));
  }

  return (
    <div>
          <Navbar />

      <div className="container mt-2 mb-2">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-12">
            <div className="card text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                <div className="col d-flex flex-column justify-content-center">
                    <p className="text-center h1 fw-bold mb-5 mt-4">
                      Sign up
                    </p>

                    <form className="mx-1 mx-md-4" onSubmit={SignUp}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                        <label className="form-label" for="form3Example1c">
                        <Usericon/>&nbsp;Nombre
                          </label>
                          <input
                            type="text"
                            id="nombre"
                            className="form-control"
                            onChange={(e)=> setNombre(e.target.value)} value={nombre}
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
                            onChange={(e)=> setEmail(e.target.value)} value={email}

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
                            onChange={(e)=> setPassword(e.target.value)} value={password}

                          />
                        </div>
                      </div>

                    

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">
                          Register
                        </button>
                      </div>
                    </form>
                    <div>
                      Ya tienes cuenta?
                      <Link to='/login'> Registrate aqui</Link>
                    </div>
                    <br></br>
                    {error && <div className='error-msg'>{error}</div>}
                  </div>
                  <div className="d-flex col-8-md align-items-center">
                    <img
                      src={nike}
                      className="img-fluid"
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
