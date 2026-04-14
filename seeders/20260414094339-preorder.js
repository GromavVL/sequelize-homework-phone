'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Preorders',
      [
        {
          date_processing: '2026-05-01',
          status: 'pending',
          count_phone: 2,
          client_phone_number: '+380991234567',
          phone_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date_processing: '2026-05-03',
          status: 'confirmed',
          count_phone: 1,
          client_phone_number: '+380672345678',
          phone_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date_processing: '2026-05-05',
          status: 'done',
          count_phone: 1,
          client_phone_number: '+380503456789',
          phone_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date_processing: '2026-05-10',
          status: 'pending',
          count_phone: 3,
          client_phone_number: '+380634567890',
          phone_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date_processing: '2026-05-12',
          status: 'confirmed',
          count_phone: 1,
          client_phone_number: '+380955678901',
          phone_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date_processing: '2026-05-15',
          status: 'pending',
          count_phone: 2,
          client_phone_number: '+380676789012',
          phone_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date_processing: '2026-05-20',
          status: 'done',
          count_phone: 1,
          client_phone_number: '+380507890123',
          phone_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Preorders', null, {})
  },
}
