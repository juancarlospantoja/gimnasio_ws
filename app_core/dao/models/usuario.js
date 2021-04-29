var bcrypt= require('bcryptjs')
//

module.exports = function (sequelize,
    DataTypes) {
    return sequelize.define('Usuario',

        {
            id_usuario:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            id_tipo_usuario:
            {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            usuario_nombre:
            {
                type: DataTypes.STRING,
                allowNull: false
            },
            cedula:
            {
                type: DataTypes.STRING,
                allowNull: false
            },
            password:
            {
                type: DataTypes.STRING,
                allowNull: false
            }

        },

        {
            tableName: 'usuario',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            classMethods:
            {
                associate: function (models) {
                    models.Usuario.belongsTo(models.TipoUsuario,

                        {
                            foreignKey: 'id_tipo_usuario', as: 'tipo_usuario'
                        }
                    );
                    models.Usuario.hasMany(models.UsuarioSede,

                        {
                            foreignKey: 'id_usuario', as: 'usuario_sede'
                        }
                    );
                }

            }, instanceMethods: {
                /**
                  * funcion que realiza la creacion de los JWT adicionando a la encriptacion
                  * el identificador del rol y la direccion ip de la conexion
                  * @param {string} id_rol - Cadena con el identificador del rol al cual ingreso el usuario
                  * @param {string} ip - Cadena con la direccion ip de la persona que esta accediendo
                **/
                /*
                generateJwt () {
                    var fechaExpiracion= new Date()
                    var idusuario=this.id_usuario
                    var clave=process.env.JWT_SECRET
                    var hashpersona=Encriptadora.encriptar(idusuario.toString())
                    fechaExpiracion.setDate(fechaExpiracion.getDate()+7)
                    return Jwt.sign({
                    hashi:hashpersona,
                    exp:parseInt(fechaExpiracion.getTime()/1000),
                    }, clave, { algorithm: 'HS256', })
                },
                */
                hashPassword() {
               //hashPassword() {
                    const salt = bcrypt.genSaltSync(10);
                   return  this.password = bcrypt.hashSync(this.password, salt);
                },

                checkPassword(password){
                    return bcrypt.compareSync(password, this.password);

                }



            }

        }
    );

};

