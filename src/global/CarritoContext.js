import React, { createContext, useReducer } from 'react'
import { CarritoReducer } from './CarritoReducer'

export const CarritoContext = createContext();

export const CarritoContextProvider = (props) => {

    const [cart, dispatch] = useReducer(CarritoReducer, { carritoCompra: [], precioTotal: 0, totalProds: 0 })

    return (
        <CarritoContext.Provider value={{ ...cart, dispatch }}>
            {props.children}
        </CarritoContext.Provider>
    )
}