
import { toast, configure } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
});


export const CarritoReducer = (state, action) =>{
    const {carritoCompra, precioTotal, totalProds} = state;


    let jersey;
    let index;
    let precioActualizado;
    let cantidadActualizada;



    switch(action.type){
        case 'Añadir_carrito':
            const check = carritoCompra.find(jersey=>jersey.JerseyID === action.id);
            if(check){
                toast.error('Producto ya esta en la cesta');
                return state;
            }else{
                jersey = action.jersey;
                jersey['cantidad'] = 1;
                jersey['precioTotal'] = jersey.JerseyPrice * jersey.cantidad;
                cantidadActualizada = totalProds + 1;
                precioActualizado = precioTotal + jersey.JerseyPrice;
                toast.info('Producto añadido a la cesta');

                return{
                    carritoCompra:[jersey, ...carritoCompra], precioTotal: precioActualizado, totalProds: cantidadActualizada
                }
            }
            break;


    }
}