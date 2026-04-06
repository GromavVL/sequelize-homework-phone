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
        type: Sequelize.STRING(64),
        allowNull: false
      },
      brand: {
        type: Sequelize.STRING(32),
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
        type: Sequelize.STRING(64),
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

    await queryInterface.sequelize.query(
      `ALTER TABLE "Phones"
        ADD CONSTRAINT "chk_phones_model_length" CHECK (CHAR_LENGTH(model) >= 2),
        ADD CONSTRAINT "chk_phones_brand_length" CHECK (CHAR_LENGTH(brand) >= 2),
        ADD CONSTRAINT "chk_phones_cpu_length"   CHECK (CHAR_LENGTH(cpu) >= 2);`
    )
  },
  async down (queryInterface) {
    await queryInterface.dropTable('Phones')
  }
}
