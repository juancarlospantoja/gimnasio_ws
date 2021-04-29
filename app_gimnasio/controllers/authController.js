var usuarioDao = require("../../app_core/dao/usuario/usuarioDao.js");
var usuarioSedeDao = require("../../app_core/dao/usuario_sede/usuario_sedeDao.js");


var Respuesta = require("../helpers/respuesta");


var getUsuario = function (req,res){  
    usuarioDao.usuario().then(function (respuesta){
        Respuesta.sendJsonResponse(res,200,respuesta);  
    });            
}

var getUsuarioByCedula = function (req,res){  
    usuarioDao.usuarioByCedula({"cedula":1085270823}).then(function (respuesta){
        Respuesta.sendJsonResponse(res,200,respuesta);  
    });            
}

var addUsuario = async (req, res) => {
    let usuario = await usuarioDao.usuarioByCedula(req.body);
    if(usuario.length>0){
        Respuesta.sendJsonResponse(res, 200, "el usuario ya existe");
    } else{
        let addUsuario = await usuarioDao.createUsuario(req.body);
        let usuarioSede = {
            "id_usuario_sede":2,
            "id_usuario":addUsuario.id_usuario,
            "id_sede":req.body.id_sede
        }
        let addUsuarioSede = await usuarioSedeDao.createUsuarioSede(usuarioSede);
        Respuesta.sendJsonResponse(res, 200, addUsuarioSede);
    } 
};


module.exports.getUsuario = getUsuario;   
module.exports.getUsuarioByCedula = getUsuarioByCedula;   
module.exports.addUsuario = addUsuario;   
