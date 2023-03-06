import React, {useContext} from 'react'
import { ProductosContext } from '../global/ProductosContext'
import '../css/producto.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export const Products = () => {

  const {productos} = useContext(ProductosContext);

console.log(productos);

  return (
    <>
            
            <div className="d-flex flex-wrap flex-row">
                {productos.length === 0 && <div>slow internet...no products to display</div>}
                {productos.map(jersey => (
                    <div className="xd1 col-lg-4 d-flex justify-content-center align-content-center">
                    <div className="xd card d-flex justify-content-center align-content-center">
                        <div className="card-img-top">
                            <img className="photo" src={jersey.JerseyImage} alt="Producto"></img>
                        </div>
                        <div className="card-body row">
                            <div className="col">
                
                                <div>{jersey.JerseyName}</div>
                                <div>Price: {jersey.JerseyPrice}$</div>
                            </div>
                            <div className="col d-flex justify-content-center align-content-center">
                                <button className="btn button btn-success"><AddShoppingCartIcon/>&nbsp;Añadir</button>
                
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>








        </>







  )
}
