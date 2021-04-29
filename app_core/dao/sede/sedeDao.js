var Models=require("../models/index");

var sede = () => {
    return Models.Sede.findAll();
};

var createSede = (sede) => {
    return Models.Sede.create(sede);
};

module.exports.sede = sede;
module.exports.createSede = createSede;

