module.exports = function (sequelize,
    DataTypes) {
    return sequelize.define('Sede',

        {
            id_sede:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            id_ciudad:
            {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            sede_nombre:
            {
                type: DataTypes.STRING,
                allowNull: false
            }

        },

        {
            tableName: 'sede',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            classMethods:
            {
                associate: function (models) {
                    models.Sede.belongsTo(models.Ciudad,

                        {
                            foreignKey: 'id_ciudad', as: 'ciudad'
                        }
                    );
                    models.Sede.hasMany(models.UsuarioSede,
 
                        {
                            foreignKey: 'id_sede', as: 'usuario_sede'
                        }
                    );
                }

            }

        }
    );

};

