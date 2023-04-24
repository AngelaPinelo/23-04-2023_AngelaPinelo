const {querys} = require('../../database/query');
const {genericMysql} = require('../../database/connection');

class Sucursal{
    constructor(nombre, direccion, correo, departamento, municipio_id, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.correo = correo;
        this.departamento = departamento;
        this.municipio_id = municipio_id;
        this.telefono = telefono;
    }

    setSucursal() {
        const data = genericMysql(querys.agregarSucu(this.nombre, this.direccion, this.correo, this.departamento,this.municipio_id, this.telefono));
        return data
    }

    async eliminarSucursal(idSucu){
        const data = await genericMysql(querys.eliminarSucu(idSucu));
        return data
    }
    async getSucursales() {
        const data = await genericMysql(querys.verSucursales());
        return data[0]
    }

    async getId(nombre) {
        const data = await genericMysql(querys.getIdSucu(nombre));
        return data[0]
    }

}
module.exports = Sucursal;