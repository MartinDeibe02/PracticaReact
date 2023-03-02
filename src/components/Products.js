import React, {useContext} from 'react'
import { ProductosContext } from '../global/ProductosContext'
 


export const Products = () => {

  const {productos} = useContext(ProductosContext);
console.log(productos);

  return (
    <div>
        Products
    </div>
  )
}
