var Express = require('express');
var UsuarioController = require("../controllers/usuarioController");
var CiudadController = require("../controllers/ciudadController");
var SedeController = require("../controllers/sedeController");
var usuarioSedeController = require("../controllers/usuarioSedeController");

var AuthController = require("../controllers/authController");
var FuncionesSeguridad= require("../../app_core/helpers/funcionesSeguridad");






var router = Express.Router();

router.get('/', (req, res) => {
    res.send('hello Word');
})

/*
 * RUTAS DE Usuarios
 */
//-------------------------------------------------------------------------------------------------------------------------------
router.get("/usuario",UsuarioController.getUsuario);
router.post("/usuario",UsuarioController.addUsuario);

/*
 * RUTAS DE Ciudades
 */
//-------------------------------------------------------------------------------------------------------------------------------
router.get("/ciudad",CiudadController.getCiudad);
router.post("/ciudad",FuncionesSeguridad.verifyToken,FuncionesSeguridad.checkRole,CiudadController.addCiudad);

/*
 * RUTAS DE Sedes
 */
//-------------------------------------------------------------------------------------------------------------------------------
router.get("/sede",SedeController.getSede);
router.post("/sede",FuncionesSeguridad.verifyToken,FuncionesSeguridad.checkRole,SedeController.addSede);

/*
 * RUTAS DE seguridad
 */
//-------------------------------------------------------------------------------------------------------------------------------
router.get("/usuarioSede/:id_sede",FuncionesSeguridad.verifyToken,FuncionesSeguridad.checkRole,usuarioSedeController.getUsuarioSede);


module.exports = router;