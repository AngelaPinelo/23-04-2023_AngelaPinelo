import React, { useState, useEffect} from 'react';
import Navbar2 from './NavbarGeneral';


const SucursalesList = () => {
    const [sucursales, setSucursales] = useState([])

    useEffect (() => {
      const getSucursales = () => {
        fetch( 'http://localhost:4000/verSucursales ' , {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(response => setSucursales(response))
      }
      getSucursales()
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
                <th scope="col">Direccion</th> 
                <th scope="col">Telefono</th>               
                
            </tr>
        </thead>
        <tbody>
            {sucursales.map(sucursal =>(
                    <tr key={sucursal.id}>
                        <th>{sucursal.id}</th>                       
                        <th>{sucursal.nombre}</th>
                        <th>{sucursal.direccion}</th>                       
                        <th>{sucursal.telefono}</th>
                    </tr>
                 ))}
            
        </tbody>
    </table>
    </div>
     );
}

export default SucursalesList;