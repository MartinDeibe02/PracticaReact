import React, {useEffect} from 'react'
import '../css/Home.css'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Products } from './Products'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/config';

export const Home = ({user}) => {

  
  return (
    <div className='homeCss'>
        <Navbar user={user}/>
        <Products/>
        <Footer/>
    </div>  
    )
}


