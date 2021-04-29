var Models=require("../models/index");

var usuario = ( ) => {
    return Models.Usuario.findAll();
};

var usuarioByCedula = (usuario) =>{
    return Models.Usuario.findAll({
        where:{
            cedula:usuario.cedula,
        }
    }); 
};

var usuarioLogin = (usuario) => {
    return Models.Usuario.findAll({
        where:{
            cedula:usuario.cedula,
            password:usuario.password
        }
    });    
};

var createUsuario = (usuario) => {
    return Models.Usuario.create(usuario);
};

module.exports.usuario = usuario;
module.exports.usuarioByCedula = usuarioByCedula;
module.exports.usuarioLogin = usuarioLogin;
module.exports.createUsuario = createUsuario;


