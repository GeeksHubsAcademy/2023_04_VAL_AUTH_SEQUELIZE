'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        name: 'user',
        email: 'user@user.com',
        password: '$2b$08$7yUj6h5MUIY4S3YT2EFTROxLTfwP.Je5t.7BltT.xzRpE/0WSYTJC', // 1234
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'admin',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('princess', 8), // princess
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'super_admin',
        email: 'super_admin@super_admin.com',
        password: bcrypt.hashSync('admin1234', 8), // admin1234,
        role_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
