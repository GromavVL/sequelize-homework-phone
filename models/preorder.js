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
        foreignKey: 'phoneId',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  Preorder.init(
    {
      dateProcessing: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('done', 'pending', 'confirmed'),
        allowNull: false,
      },
      countPhone: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },
      clientPhoneNumber: {
        type: DataTypes.STRING(14),
        allowNull: false,
      },
      phoneId: {
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
      tableName: 'Preorders',
      underscored: true,
    }
  );
  return Preorder;
};
