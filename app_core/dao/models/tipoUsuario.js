module.exports = function (sequelize,
    DataTypes) {
    return sequelize.define('TipoUsuario',

        {
            id_tipo_usuario:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            tipo_usuario_nombre:
            {
                type: DataTypes.STRING,
                allowNull: false
            }

        },

        {
            tableName: 'tipo_usuario',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            classMethods:
            {
                associate: function (models) {
                    models.TipoUsuario.hasMany(models.Usuario,
 
                        {
                            foreignKey: 'id_tipo_usuario', as: 'usuario'
                        }
                    );
                }

            }

        }
    );

};

