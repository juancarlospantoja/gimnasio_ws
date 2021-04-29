var usuarioDao = require("../../app_core/dao/usuario/usuarioDao");
var usuarioSedeDao = require("../../app_core/dao/usuario_sede/usuario_sedeDao");


var Respuesta = require("../helpers/respuesta");
var jwt = require('jsonwebtoken');


var getUsuarioLogin = async (req, res) => {
    const { cedula, password } = req.body;
    if (!(cedula && password)) {
        Respuesta.sendJsonResponse(res, 400, { message: 'cedula y paswword son requeridos' });
    }
    try {
        let usuario = await usuarioDao.usuarioLogin(req.body)
        if (usuario.length == 0) {
            Respuesta.sendJsonResponse(res, 400, { message: 'La cedula ó el password son incorrecos' });
        }
        jwt.sign({ user: usuario }, 'secretkey', (err, token) => {
            Respuesta.sendJsonResponse(res, 200, { token });
        })

    } catch (e) {
        Respuesta.sendJsonResponse(res, 400, e);
    }
};

module.exports.getUsuarioLogin = getUsuarioLogin;
