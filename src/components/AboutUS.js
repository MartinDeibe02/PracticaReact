import React from "react";
import "../css/Home.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import "../css/about.css";
import { Link } from "react-router-dom";
import nikeLogo from '../images/nikeicon.png';
import "bootstrap/dist/css/bootstrap.min.css";
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';


export const AboutUS = ({user}) => {
  return (
    <div>
      <Navbar user={user}/>

      <div class="row">
        <div className="col d-flex flex-column align-items-center mt-5">
          <h3>Quienes somos?</h3>
          <hr className="w-50" />
          <p className="w-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="button"><Link className="white" to={'/signup'}>Registrate</Link></button>
        </div>
      </div>

      <div className="row mt-3">
        <div class="split-pane col-xs-12 col-md-6 left-side">
          <div>
            <div class="text-content">
              <div class="bold">Ropa</div>
              <div class="big">Mujer</div>
            </div>
            <button class="button"><Link className="white" to='/productos'> VER PRODUCTOS</Link></button>
          </div>
        </div>

        <div class="split-pane col-xs-12 col-md-6 right-side">
          <div>
            <div class="text-content">
              <div class="bold">Ropa</div>
              <div class="big">Hombre</div>
            </div>
            <button class="button"><Link className="white" to='/productos'> VER PRODUCTOS</Link></button>
          </div>
        </div>
      </div>

      <div className="row mt-5 d-flex flex-row mb-5">
          <div className="col-md d-flex flex-column align-items-center justify-content-center">
            <SportsBasketballIcon sx={{ fontSize: 60 }} />
            <h2 className="mt-4">Nuestros jerseys</h2>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          </div>
            <hr className="vertical"/>
            <div className="col-md d-flex flex-column align-items-center justify-content-center">
            <img className="nike" src={nikeLogo} alt='nike logo'></img>
            <h2 className="mt-4">Nike</h2>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          </div>
          <hr className="vertical"/>
          <div className="col-md d-flex flex-column align-items-center justify-content-center">
              <AddShoppingCartSharpIcon  sx={{ fontSize: 60 }} />
              <h2 className="mt-4">Nuestro carro</h2>
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          </div>

      </div>

      <Footer />
    </div>
  );
};
