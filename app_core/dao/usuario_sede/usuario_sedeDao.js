var Models = require("../models/index");

var usuarioSede = (id_sede) => {
    return Models.UsuarioSede.findAll({
        include: [
            {
                model: Models.Usuario, as: 'usuario',

            }, {
                model: Models.Sede, as: 'sede',
                include:[
                    {
                        model: Models.Ciudad, as: 'ciudad',
                    }
                ]
            }
        ], where: {
            id_sede: id_sede
        }
    });
};

var createUsuarioSede = (usuarioSede) => {
    return Models.UsuarioSede.create(usuarioSede);
};


module.exports.usuarioSede = usuarioSede;
module.exports.createUsuarioSede = createUsuarioSede;