import React, {useContext} from 'react'
import { ProductosContext } from '../global/ProductosContext'
import '../css/producto.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Icon from '@mui/material/Icon';



export const Products = () => {

  const {productos} = useContext(ProductosContext);

console.log(productos);

  return (
    <>
            
            <div class="d-flex flex-wrap flex-row">
                {productos.length === 0 && <div>slow internet...no products to display</div>}
                {productos.map(jersey => (
                    <div class="xd1 col-lg-4 d-flex justify-content-center align-content-center">
                    <div class="xd card d-flex justify-content-center align-content-center">
                        <div class="card-img-top">
                            <img class="photo" src={jersey.JerseyImage} alt="Feid"></img>
                        </div>
                        <div class="card-body row">
                            <div class="col">
                
                                <div>{jersey.JerseyName}</div>
                                <div>Price: {jersey.JerseyPrice}$</div>
                            </div>
                            <div class="col d-flex justify-content-center">
                                <button class="btn button btn-success"><AddShoppingCartIcon/>&nbsp;Añadir</button>
                
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>








        </>







  )
}
