'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Preorders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date_processing: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('done', 'pending', 'confirmed'),
        allowNull: false,
      },
      count_phone: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      client_phone_number: {
        type: Sequelize.STRING(14),
        allowNull: false,
      },
      phone_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Phones',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Preorders');
  },
};
