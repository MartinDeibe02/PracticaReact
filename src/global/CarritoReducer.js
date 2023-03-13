
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
    position: toast.POSITION.BOTTOM_RIGHT,
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
            console.log(action.id);
            if(check){
                toast.error('Producto ya en la cesta');
                return state;
            
            }else{
                jersey = action.jersey;
                jersey['cantidad'] = 1;
                jersey['precioTotalProductos'] = jersey.JerseyPrice * jersey.cantidad;
                cantidadActualizada = totalProds + 1;
                precioActualizado = precioTotal + jersey.JerseyPrice;
                toast.info('Producto añadido a la cesta');

                return{
                    carritoCompra:carritoCompra.concat(jersey), precioTotal: precioActualizado, totalProds: cantidadActualizada
                }

            }

            case 'sumar':
                jersey=action.jersey;
                jersey.cantidad=++jersey.cantidad;
                jersey.precioTotalProductos= jersey.JerseyPrice * jersey.cantidad;
                cantidadActualizada = totalProds + 1;
                precioActualizado = precioTotal + jersey.JerseyPrice;
                index=carritoCompra.findIndex(cart=>cart.JerseyID===action.id);
                carritoCompra[index] = jersey;
                return {
                    carritoCompra:[...carritoCompra],precioTotal: precioActualizado, totalProds: cantidadActualizada
                }

            case 'restar':
                jersey=action.jersey;
                if(jersey.cantidad>1){
                    jersey.cantidad= jersey.cantidad -1;
                    jersey.precioTotalProductos= jersey.JerseyPrice * jersey.cantidad;
                    cantidadActualizada = totalProds - 1;
                    precioActualizado = precioTotal - jersey.JerseyPrice;
                    index=carritoCompra.findIndex(cart=>cart.JerseyID===action.id);
                    carritoCompra[index] = jersey;

                    return {
                        carritoCompra:[...carritoCompra],precioTotal: precioActualizado, totalProds: cantidadActualizada
                    }
                }else{
                    toast.error('La cantidad minima es 1');

                    return state;
                }
            
            case 'borrar':
                const objBorrar = carritoCompra.filter(jersey => jersey.JerseyID !== action.id);
                jersey = action.jersey;
                cantidadActualizada = totalProds - jersey.cantidad;
                precioActualizado = precioTotal - jersey.cantidad * jersey.JerseyPrice;
                return {
                    carritoCompra: [...objBorrar], precioTotal: precioActualizado, totalProds: cantidadActualizada
                }
        
            default:
                return state;
    }
}