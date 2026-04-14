'use strict';
const { Model, Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Phone.hasMany(models.Preorder, {
        foreignKey: 'phoneId',
      });
    }
  }
  Phone.init(
    {
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 32],
        },
      },
      yearProduction: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      sizeRam: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpu: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      screenDiagonal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isNfc: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      imagePhone: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Phone',
      tableName: 'Phones',
      underscored: true,
    }
  );
  return Phone;
};
