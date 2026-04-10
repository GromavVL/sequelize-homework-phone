'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Preorder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Preorder.belongsTo(models.Phone, {
        foreignKey: 'phone_id',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  Preorder.init(
    {
      date_processing: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('done', 'pending', 'confirmed'),
        allowNull: false,
      },
      count_phone: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },
      client_phone_number: {
        type: DataTypes.STRING(14),
        allowNull: false,
      },
      phone_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Phones',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Preorder',
    }
  );
  return Preorder;
};
