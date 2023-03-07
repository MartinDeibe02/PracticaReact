import React, {useEffect} from 'react'
import '../css/Home.css'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Products } from './Products'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/config';

export const Home = ({user}) => {


  const history = useNavigate();
  //Si el usuario no esta logeado no podra ver el home
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(!user){
        history('/login');
      }
    })
  });
  
  return (
    <div className='homeCss'>
        <Navbar user={user}/>
        <Products/>
        <Footer/>
    </div>  
    )
}


