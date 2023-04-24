import React, { useState, useEffect} from 'react';
import Navbar2 from './NavbarGeneral';


const ProductosList = () => {
    const [productos, setproductos] = useState([])

    useEffect (() => {
      const getproductos = () => {
        fetch( 'http://localhost:4000/verProductos' , {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(response => setproductos(response))
      }
      getproductos()
    }, [])
return (
<div>
  <Navbar2/>
  <br/>
    <table className="table">
        <thead className="thead-dark">
            <tr className="bg-secondary text-white">
                <th scope="col">ID</th>                
                <th scope="col">Nombre</th>    
                <th scope="col">Categoria</th> 
                <th scope="col">Cantidad</th>               
                
            </tr>
        </thead>
        <tbody>
            {productos.map(producto =>(
                    <tr key={producto.id}>
                        <th>{producto.id}</th>                       
                        <th>{producto.Nombre}</th>
                        <th>{producto.categoria}</th>                       
                        <th>{producto.Cantidad}</th>
                    </tr>
                 ))}
            
        </tbody>
    </table>
    </div>
     );
}

export default ProductosList;