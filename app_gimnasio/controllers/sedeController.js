var sedeDao = require("../../app_core/dao/sede/sedeDao.js");
var Respuesta = require("../helpers/respuesta");

var getSede = async (req, res) => {
    let respuesta = await sedeDao.sede();  
    Respuesta.sendJsonResponse(res, 200, respuesta); 
};

var addSede = async (req, res) => {
    let respuesta = await sedeDao.createSede(req.body);  
    Respuesta.sendJsonResponse(res, 200, respuesta); 
};

module.exports.getSede = getSede;
module.exports.addSede = addSede;

