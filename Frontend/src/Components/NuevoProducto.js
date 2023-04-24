import React from "react";
import { useState } from 'react';
import Navbar2 from './NavbarGeneral';


const NuevoProducto = () => {

    const[producto, setproducto] = useState({
        nombre: '',
        categoria: '',
        descripcion: '',
        cantidad: '1',
        idSucursal: '1'
      })


    const handleChange = e => {
        setproducto({
            ...producto,
            // [e.target.name] es el nombre del campo que se ha modificado y lo convierte en el valor actual 
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async (e) => {
         e.preventDefault()
        //validación de los datos para evitar que se envíen vacíos
        if (producto.nombre === '' || producto.categoria === ''  || producto.descripcion === '' || producto.cantidad === ''|| producto.idSucursal === '') {
            alert('TODOS LOS CAMPOS SON OBLIGATORIOS')
            return
        }

          // Enviar los datos del formulario al servidor
          try {
            const response = await fetch('http://localhost:4000/crearProducto', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(producto)
            });
        
            if (!response.ok) {
              alert('Hay un Error');
              return;
            }
        
            // La respuesta del servidor fue exitosa, redirigir al usuario a la página principal
          } catch (error) {
            alert('producto enviado');
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
          <h3>-- Nuevo producto --</h3>
        </div>
        <div className="card-body">
          <form >
            <div className="form-group">
              <label htmlFor="nombre" className="form-label">nombre del Producto:</label>
              <input value={producto.nombre}  onChange={handleChange} type="text" className="form-control" id="nombre" name="nombre" placeholder="Introduce el nombre del producto"/>
            </div>
            <div className="form-group">
              <label htmlFor="categoria">Categoria:</label>
              <input  value={producto.categoria}  onChange={handleChange} type="text" className="form-control" id="categoria" name ="categoria"  placeholder="Introduce el categoria del Producto" />
            </div>
            <div className="form-group">
              <label htmlFor="descripcion">Descripción del Producto:</label>
              <input value={producto.descripcion}  onChange={handleChange} type="text-area" className="form-control" id="descripcion" name ="descripcion" placeholder="Descripción del Producto" />
            </div>
            <div className="form-group">
              <label htmlFor="descripcion">Cantidad:</label>
              <input value={producto.cantidad}  onChange={handleChange} type="number" className="form-control" id="cantidad" name ="cantidad" placeholder="Cantidad" />
            </div>
            <div className="form-check">
            <label htmlFor="estado" className="form-label">Sucursal:  </label> <br/>
                <select name="estado" id="estado" value={producto.idSucursal}  onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2 </option>
                    <option value="3">3 </option>
                </select>
                <br/>
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
export default NuevoProducto;