module.exports = function (sequelize,
    DataTypes) {
    return sequelize.define('Ciudad',

        {
            id_ciudad:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            ciudad_nombre:
            {
                type: DataTypes.STRING,
                allowNull: false
            }

        },

        {
            tableName: 'ciudad',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            classMethods:
            {
                associate: function (models) {
                    models.Ciudad.hasMany(models.Sede,
 
                        {
                            foreignKey: 'id_ciudad', as: 'sede'
                        }
                    );
                }

            }

        }
    );

};

