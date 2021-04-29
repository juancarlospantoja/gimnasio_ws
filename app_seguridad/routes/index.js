var Express = require('express');
var FuncionesSeguridad= require("../../app_core/helpers/funcionesSeguridad");

var AuthController = require("../controllers/authController");

var router = Express.Router();


router.get('/', (req, res) => {
    res.send('hello seguridad');
})

/*
* Rutas seguridad
*/
//router.post("/usuario",FuncionesSeguridad.verifyToken,FuncionesSeguridad.checkRole,AuthController.getUsuario);
router.post("/login",AuthController.getUsuarioLogin);


module.exports = router;
