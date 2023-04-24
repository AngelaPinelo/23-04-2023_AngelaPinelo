const querys = {
    verProductos: () => `CALL Ver_Productos();`,
    verMunicipios: () => `CALL Ver Municipios();`,
    verSucursales: () => `CALL VerSucursales();`,
    buscarProducto: (nombreProd) => `CALL BuscarProducto('${nombreProd}');`,
    setProducto: (categoria, descripcion, idSucu, nombre, Cantidad)=> `CALL AgregarProducto('${categoria}', '${descripcion}', '${idSucu}', '${nombre}', '${Cantidad}');`,
    eliminarProducto: (idProd) => `CALL EliminarProducto('${idProd}');`,
    sumarProductos: (cantidadAgregar, idProd) => `CALL SumarProductos('${cantidadAgregar}', '${idProd}' );`,
    agregarSucu: (nombre, direccion, correo, departamento, municipio, telefono) => `CALL AgregarSucu('${nombre}', '${direccion}', '${correo}', '${departamento}', '${municipio}', '${telefono}');`,
    eliminarSucu: (idSucu) => `CALL DeleteSucursal('${idSucu}');`,
    getIdSucu: (nombreSucu) => `CALL ObtenerIdSucursal('${nombreSucu}');`,
};

module.exports = {querys}