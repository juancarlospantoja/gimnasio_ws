var Models=require("../models/index");

var ciudad = () => {
    return Models.Ciudad.findAll();
};

var createCiudad = (ciudad) => {
    return Models.Ciudad.create(ciudad);
};

module.exports.ciudad = ciudad;
module.exports.createCiudad = createCiudad;

