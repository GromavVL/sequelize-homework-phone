'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: false
      },
      year_production: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      size_ram: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpu: {
        type: Sequelize.STRING,
        allowNull: false
      },
      screen_diagonal: {
        type: Sequelize.STRING,
        allowNull: false
      },
      is_nfc: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Phones')
  }
}
