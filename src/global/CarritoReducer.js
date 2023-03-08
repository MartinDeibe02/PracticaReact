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
                console.log('El producto ya esta en el carrito');
                return state;
            }else{
                jersey = action.jersey;
                jersey['cantidad'] = 1;
                jersey['precioTotal'] = jersey.JerseyPrice * jersey.cantidad;
                cantidadActualizada = totalProds + 1;
                precioActualizado = precioTotal + jersey.JerseyPrice;

                return{
                    carritoCompra:[jersey, ...carritoCompra], precioTotal: precioActualizado, totalProds: cantidadActualizada
                }
            }
            break;
    }
}