module.exports = function (sequelize,
    DataTypes) {
    return sequelize.define('UsuarioSede',

        {
            id_usuario_sede:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            id_usuario:
            {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            id_sede:
            {
                type: DataTypes.INTEGER,
                allowNull: false
            },

        },

        {
            tableName: 'usuario_sede',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            classMethods:
            {
                associate: function (models) {
                    models.UsuarioSede.belongsTo(models.Usuario,

                        {
                            foreignKey: 'id_usuario', as: 'usuario'
                        }
                    );
                    models.UsuarioSede.belongsTo(models.Sede,

                        {
                            foreignKey: 'id_sede', as: 'sede'
                        }
                    );
                }

            }

        }
    );

};

