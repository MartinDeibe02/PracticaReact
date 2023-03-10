import React, { useState, useEffect, useContext } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { useParams } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "../css/detail.css";
import { CarritoContext } from "../global/CarritoContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

export const Detalle = () => {
  const { jerseyId } = useParams();
  const [jersey, setjersey] = useState(null);
  const { dispatch } = useContext(CarritoContext);

  useEffect(() => {
    function obtenerjersey() {
      const jerseyRef = firebase
        .firestore()
        .collection("Productos")
        .doc(jerseyId);
      jerseyRef.get().then((doc) => {
        if (doc.exists) {
          const jersey = doc.data();
          setjersey(jersey);
          console.log(jersey);
        } else {
          console.log("No Existe");
        }
      });
    }

    obtenerjersey();
  }, [jerseyId]);

  return (
    <div>
      <Navbar />
      {jersey ? (
        <div className="row m-5">

          <div className="col-lg-5 ">
            
            <img className="product-image" src={jersey.JerseyImage} alt='Imagen'></img>
          </div>
          <div className="col-lg-7">
          <h6 className="mb-3"><Link to='/productos' className="text-body"><ArrowBackIcon  style={{ color: 'red' }}/>Volver a productos</Link></h6>

          <h2 className="align-self-start">{jersey.JerseyName}</h2>

            <div className="info d-flex flex-column justify-content-center align-items-center">
              <p>{jersey.JerseyDescription}</p>
              <p className="align-self-start">Precio: {jersey.JerseyPrice} $</p>
              <button
                className="button"
                id="buy"
                onClick={() =>
                  dispatch({
                    type: "Añadir_carrito",
                    id: jersey.JerseyID,
                    jersey,
                  })
                }
              >
                <AddShoppingCartIcon />
                &nbsp;Añadir
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
      <Footer />
    </div>
  );
};
