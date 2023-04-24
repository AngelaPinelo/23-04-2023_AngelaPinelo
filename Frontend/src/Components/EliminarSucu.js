import React from "react";
import { useState } from 'react';
import Navbar2 from './NavbarGeneral';


const EliminarSucu = () => {

    const[sucursal, setsucursal] = useState({
       idSucursal: ''
      })


    const handleChange = e => {
        setsucursal({
            ...sucursal,
            // [e.target.name] es el nombre del campo que se ha modificado y lo convierte en el valor actual 
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async (e) => {
         e.preventDefault()
        

          // Enviar los datos del formulario al servidor
          try {
            const response = await fetch('http://localhost:4000/eliminarsucursal', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(sucursal)
            });
        
            if (!response.ok) {
              alert('Hay un Error');
              return;
            }
        
            
          } catch (error) {
            alert('sucursal eliminado');
          }
    }

return(
<div>
  <Navbar2/>
  <br/>

<div>

<br/>
<br/>
<div className="container d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="card-header text-center">
          <h3>-- Eliminar Sucursal --</h3>
        </div>
        <div className="card-body">
          <form >
            <div className="form-group">
              <label htmlFor="idSucursal" className="form-label">ID del sucursal:</label>
              <input value={sucursal.idSucursal}  onChange={handleChange} type="number" className="form-control" id="idSucursal" name="idSucursal" placeholder="Introduce el ID"/>
            </div>
            <div className="text-center">
              <button type="button" onClick={handleSubmit} className="btn btn-primary mt-3">Eliminar</button>
            </div>
          </form>
          <br/>
        </div>
      </div>
    </div>
    </div>
    </div>

)

}
export default EliminarSucu;