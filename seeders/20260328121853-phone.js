'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Phones',
      [
        {
          model: 'Galaxy S24',
          brand: 'Samsung',
          year_production: '2024-01-01',
          size_ram: '8 GB',
          cpu: 'Snapdragon 8 Gen 3',
          screen_diagonal: '6.2"',
          is_nfc: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          model: 'iPhone 15',
          brand: 'Apple',
          year_production: '2023-09-01',
          size_ram: '6 GB',
          cpu: 'Apple A16 Bionic',
          screen_diagonal: '6.1"',
          is_nfc: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          model: 'Redmi Note 13',
          brand: 'Xiaomi',
          year_production: '2023-09-01',
          size_ram: '8 GB',
          cpu: 'Mediatek Helio G99',
          screen_diagonal: '6.67"',
          is_nfc: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          model: 'Pixel 8',
          brand: 'Google',
          year_production: '2023-10-01',
          size_ram: '8 GB',
          cpu: 'Google Tensor G3',
          screen_diagonal: '6.2"',
          is_nfc: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          model: '12R',
          brand: 'OnePlus',
          year_production: '2024-01-01',
          size_ram: '16 GB',
          cpu: 'Snapdragon 8 Gen 2',
          screen_diagonal: '6.78"',
          is_nfc: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Phones', null, {})
  }
}
