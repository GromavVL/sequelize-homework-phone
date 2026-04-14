'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.renameColumn('Phones', 'createdAt', 'created_at');
    await queryInterface.renameColumn('Phones', 'updatedAt', 'updated_at');
    await queryInterface.renameColumn('Preorders', 'createdAt', 'created_at');
    await queryInterface.renameColumn('Preorders', 'updatedAt', 'updated_at');
  },

  async down (queryInterface) {
    await queryInterface.renameColumn('Phones', 'created_at', 'createdAt');
    await queryInterface.renameColumn('Phones', 'updated_at', 'updatedAt');
    await queryInterface.renameColumn('Preorders', 'created_at', 'createdAt');
    await queryInterface.renameColumn('Preorders', 'updated_at', 'updatedAt');
  },
};
