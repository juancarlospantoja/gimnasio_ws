var Request = require("request");
var Express = require('express');
var Q = require("q");
var Respuesta = require("../helpers/respuesta");
var jwt = require('jsonwebtoken');


/**
* Modulo que agrupa todas las funciones de seguridad de autenticacion de tokens y desencriptacion de la informacion
* @module FuncionesSeguridad
**/
/**
* funcion middleware que administra y valida la autenticacion a traves del token conectandose con el servidor ARGUS
* @param {Object} req - objeto de peticion.
* @param {Object} res - objeto de respuesta.
* @param {function} next - funcion next.
* @returns {function} next- funcion next para continuar con la ejecucion del codigo que llama al middleware
**/


function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    try {
        if(typeof bearerHeader !== 'undefined'){
            const bearerToken = bearerHeader.split(" ")[1];    
            jwt.verify(bearerToken, 'secretkey', async (error, authData) => {
                if (error) {
                    return res.sendStatus(403);
                } else {
                    res.locals.jwtPayload = authData
                    next();
                }
            })
        }else{
            Respuesta.sendJsonResponse(res, 403, { message: 'No Autorizado' });
        }
    } catch (e) {
        return res.sendStatus(401);
    }
}

function checkRole(req, res, next) {
    console.log("checkrol****", res.locals.jwtPayload)
    if(res.locals.jwtPayload.user[0].id_tipo_usuario==1){
        next();
    }else{
        Respuesta.sendJsonResponse(res, 401, { message: 'No Autorizado' });
    }
    
}

module.exports.verifyToken = verifyToken;
module.exports.checkRole = checkRole;


