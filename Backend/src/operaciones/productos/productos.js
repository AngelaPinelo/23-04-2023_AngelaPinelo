const {querys} = require('../../database/query');
const {genericMysql} = require('../../database/connection');

class Producto {
    constructor(nombre, categoria, descripcion, cantidad, sucursal) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.sucursal = sucursal;
    }

    async buscarProd(nombreProd) {
        const data =  await genericMysql(querys.buscarProducto(nombreProd));
        console.log(data[0])
        return data[0]
    }

    setProducto() {
        const data = genericMysql(querys.setProducto(this.categoria, this.descripcion, this.sucursal, this.nombre,this.cantidad));
        return data
    }

    async getProductos() {
        const data = await genericMysql(querys.verProductos());
        return data[0]
    }

    async eliminarProd(idProd){
        const data = await genericMysql(querys.eliminarProducto(idProd));
        return data
    }

    async agregarCantidad(cantidad, idProd){
        const data = await genericMysql(querys.sumarProductos(cantidad, idProd));
        return data
    }
}

module.exports = Producto;