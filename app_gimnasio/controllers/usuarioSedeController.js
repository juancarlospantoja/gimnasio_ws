const { async } = require("q");
var usuarioSedeDao = require("../../app_core/dao/usuario_sede/usuario_sedeDao.js");
var Respuesta = require("../helpers/respuesta");



var getUsuarioSede = async (req,res) => {
    let respuesta = await usuarioSedeDao.usuarioSede(req.params.id_sede);  
    Respuesta.sendJsonResponse(res, 200, respuesta); 
}

module.exports.getUsuarioSede = getUsuarioSede;