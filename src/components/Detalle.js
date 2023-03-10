import React, { useState, useEffect } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { useParams } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export const Detalle = () => {

  const { jerseyId } = useParams();
  const [jersey, setjersey] = useState(null);

  useEffect(() => {
    function obtenerjersey() {
      const jerseyRef = firebase.firestore().collection('Productos').doc(jerseyId);
      jerseyRef.get().then((doc) => {
        if (doc.exists) {
          const jersey = doc.data();
          setjersey(jersey);
          console.log(jersey);
        } else {
          console.log('No Existe');
        }
      });
    }

    obtenerjersey();
  }, [jerseyId]);

  return (
    <div>
      <Navbar />
      {jersey ? (
        <div>
          <h2>Nombre {jersey.JerseyName}</h2>
          <p>Descripcion {jersey.JerseyDescription}</p>
          <p>Precio: {jersey.JerseyPrice} $</p>
          <img src={jersey.JerseyImage}></img>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
      <Footer />
    </div>
  );
};
