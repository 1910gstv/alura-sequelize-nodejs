'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Turmas', [
      {
        data_inicio: "2020-02-01",
        nivel_id: 1,
        docente_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: "2022-06-07",
        nivel_id: 2,
        docente_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: "2021-10-05",
        nivel_id: 3,
        docente_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Turmas', null, {});

  }
};
