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
        foreignKey: 'phone_id',
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
      year_production: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      size_ram: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpu: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      screen_diagonal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_nfc: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      image_phone: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Phone',
    }
  );
  return Phone;
};
