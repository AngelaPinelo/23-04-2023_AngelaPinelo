import React from "react";
import { useState } from 'react';
import Navbar2 from './NavbarGeneral';


const NuevaSucursal = () => {

    const[sucursal, setsucursal] = useState({
        nombre: '',
        direccion: '',
        correo: '',
        departamento: 'Guatemala',
        municipio: '2',
        telefono: ''
      })


    const handleChange = e => {
        setsucursal({
            ...sucursal,
            // [e.target.name] es el nombre del campo que se ha modificado y lo convierte en el valor actual 
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async (e) => {
        // e.preventDefault()
        //validación de los datos para evitar que se envíen vacíos
        if (sucursal.nombre === '' || sucursal.direccion === ''  || sucursal.correo === '' ) {
            alert('TODOS LOS CAMPOS SON OBLIGATORIOS')
            return
        }

          // Enviar los datos del formulario al servidor
          try {
            const response = await fetch('http://localhost:4000/crearSucursal', {
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
        
            // La respuesta del servidor fue exitosa, redirigir al usuario a la página principal
          } catch (error) {
            alert('sucursal enviado');
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
          <h3>-- Nueva Sucursal --</h3>
        </div>
        <div className="card-body">
          <form >
            <div className="form-group">
              <label htmlFor="nombre" className="form-label">Nombre:</label>
              <input value={sucursal.nombre}  onChange={handleChange} type="text" className="form-control" id="nombre" name="nombre" placeholder="Introduce el nombre del sucursal"/>
            </div>
            <div className="form-group">
              <label htmlFor="direccion">direccion:</label>
              <input  value={sucursal.direccion}  onChange={handleChange} type="text" className="form-control" id="direccion" name ="direccion"  placeholder="Introduce el direccion del sucursal" />
            </div>
            <div className="form-group">
              <label htmlFor="correo">Correo</label>
              <input value={sucursal.correo}  onChange={handleChange} type="text" className="form-control" id="correo" name ="correo" placeholder="Descripción del sucursal" />
            </div>
            <div className="form-check">
            <label htmlFor="departamento" className="form-label">Municipio:  </label> <br/>
                <select name="departamento" id="departamento" value={sucursal.departamento}  onChange={handleChange}>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Peten">Peten </option>
                    <option value="Quiche">Quiche </option>
                    <option value="Izabal">Izabal </option>
                </select>
                <br/>
            </div>
            <div className="form-check">
            <label htmlFor="municipio" className="form-label">Municipio:  </label> <br/>
                <select name="municipio" id="municipio" value={sucursal.municipio}  onChange={handleChange}>
                    <option value="1">Guatemala</option>
                    <option value="2">Peten </option>
                    <option value="3">Quiche </option>
                    <option value="4">Izabal </option>
                </select>
                <br/>
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Telefono: </label>
              <input value={sucursal.telefono}  onChange={handleChange} type="number" className="form-control" id="telefono" name ="telefono" placeholder="Descripción del sucursal" />
            </div>
            <div className="text-center">
              <button type="button" onClick={handleSubmit} className="btn btn-primary mt-3">Guardar</button>
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
export default NuevaSucursal;
