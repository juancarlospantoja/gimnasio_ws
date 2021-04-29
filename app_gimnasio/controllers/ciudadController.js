const { async } = require("q");
var ciudadDao = require("../../app_core/dao/ciudad/ciudadDao.js");
var Respuesta = require("../helpers/respuesta");

var getCiudad = async (req, res) => {
    let respuesta = await ciudadDao.ciudad();
    Respuesta.sendJsonResponse(res, 200, respuesta);
};

var addCiudad = async (req, res) => {
    try {
        let respuesta = await ciudadDao.createCiudad(req.body);
        Respuesta.sendJsonResponse(res, 200, respuesta);
    } catch (e) {
        Respuesta.sendJsonResponse(res, 400, e);
    }
};

module.exports.getCiudad = getCiudad;
module.exports.addCiudad = addCiudad;
