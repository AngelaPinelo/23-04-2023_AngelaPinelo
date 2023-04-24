import React from "react";
import {NavDropdown} from 'react-bootstrap';
const Navbar2 = () => {

    return (
        <nav className="navbar navbar-dark bg-dark">  
            <div className="container">
            <NavDropdown bg= "dark "title="Reportes"  className="navbar-brand">
                <NavDropdown.Item href="/verProductos">Ver Productos</NavDropdown.Item>
                <NavDropdown.Item href="/">Ver Sucursales</NavDropdown.Item>
                
            </NavDropdown>
            <NavDropdown bg= "dark "title="Acciones"  className="navbar-brand">
                <NavDropdown.Item href="/eliminarSucursal"> Eliminar Sucursal</NavDropdown.Item>
                <NavDropdown.Item href="/eliminarProd">Eliminar Productos</NavDropdown.Item>
                <NavDropdown.Item href="/aumentar">Aumentar Productos</NavDropdown.Item>
                
            </NavDropdown>
                    <a href = "/nuevoProducto" className="navbar-brand">Nuevo Producto</a>
                    <a href = "/nuevaSucursal" className="navbar-brand">Nueva Sucursal</a>
            </div>
        </nav>

    );

}


export default Navbar2;