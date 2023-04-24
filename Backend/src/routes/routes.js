const routes = require('express').Router()
const classProd = require('../operaciones/productos/productos');
const classSucu = require('../operaciones/sucursales/sucursales');
const { querys } = require ("../database/query")

routes.get('/version', (req, res) => {
    console.log('version')
    res.status(200).send('version 1.0.0')
})

routes.get('/obtenerEmpleados', (req, res) => {
    getDataFromMysql(res,querys.obtenerProductos)
})

routes.get('/buscarProducto', async (req, res) => {
    const {nombreProd}=req.body
    const objetoProducto = new classProd();
    const data = await objetoProducto.buscarProd(nombreProd)
    res.status(200).send(data)
})

 routes.post ('/crearProducto',  async (req, res) =>  {
    const {nombre, categoria, descripcion,cantidad, idSucursal} = req.body
    const objetoProducto = new classProd(nombre, categoria, descripcion,cantidad, idSucursal);
    const data = await objetoProducto.setProducto()
    res.status(200).send(data)
})

routes.get ('/verProductos',  async (req, res) =>  {
    const objetoProducto = new classProd();
    const data = await objetoProducto.getProductos()
    res.status(200).send(data)
})

routes.post ('/eliminarProducto',  async (req, res) =>  {
    const {idProducto} = req.body
    const objetoProducto = new classProd();
    const data = await objetoProducto.eliminarProd(idProducto)
    res.status(200).send(data)
})

routes.post ('/sumarProducto',  async (req, res) =>  {
    const {cantidad, idProducto} = req.body
    const objetoProducto = new classProd();
    const data = await objetoProducto.agregarCantidad(cantidad,idProducto)
    res.status(200).send(data)
})

routes.post ('/crearSucursal',  async (req, res) =>  {
    const {nombre, direccion, correo,departamento, municipio, telefono} = req.body
    const objetoSucursal = new classSucu(nombre, direccion, correo, departamento, municipio, telefono);
    const data = await objetoSucursal.setSucursal()
    res.status(200).send(data)
})

routes.post ('/eliminarSucursal',  async (req, res) =>  {
    const {idSucursal} = req.body
    const objetoSucursal = new classSucu();
    const data = await objetoSucursal.eliminarSucursal(idSucursal)
    res.status(200).send(data)
})

routes.get ('/verSucursales',  async (req, res) =>  {
    const objetoSucursal = new classSucu();
    const data = await objetoSucursal.getSucursales()
    res.status(200).send(data)
})

routes.get ('/getIdSucursal',  async (req, res) =>  {
    const {nombreSucu} = req.body
    const objetoSucursal = new classSucu();
    const data = await objetoSucursal.getId(nombreSucu)
    res.status(200).send(data)
})
module.exports = routes 