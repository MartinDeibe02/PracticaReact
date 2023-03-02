import React,{createContext} from 'react';
import {db} from '../config/config'

export const ProductosContext = createContext();

export class ProductosContextProvider extends React.Component{

    state={
        productos:[]
    }

    componentDidMount(){
        const prevProductos = this.state.productos;
        db.collection('Productos').onSnapshot(snapshot=>{
            let cambios = snapshot.docChanges();
            cambios.forEach(cambios=>{
                if(cambios.type==='added'){
                    prevProductos.push({
                        JerseyID: cambios.doc.id,
                        JerseyName: cambios.doc.data().JerseyName,
                        JerseyDescription: cambios.doc.data().JerseyDescription,
                        JerseyImage: cambios.doc.data().JerseyImage,

                    })
                }
                this.setState({
                    productos: prevProductos
                })
            })
        })
    }

    render() {
        return (
            <ProductosContext.Provider value={{ productos: [...this.state.productos] }}>
                {this.props.children}
            </ProductosContext.Provider>
        )
    }
}