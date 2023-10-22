'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Pessoas', [{
      nome: 'Sandra Gomes',
      ativo: false,
      email: "sandra@sandra.com",
      role: "estudante",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Alessandro Bacteria',
      ativo: true,
      email: "bacteria@ale.com",
      role: "docente",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Paula Moraes',
      ativo: true,
      email: "moraes@paula.com",
      role: "diretor",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Gabriela Sanfona',
      ativo: true,
      email: "sanfona@gabriela.com",
      role: "estudante",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Gilson Bombada',
      ativo: false,
      email: "bombada@gilson.com",
      role: "estudante",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
      
    await queryInterface.bulkDelete('Pessoas', null, {});
     
  }
};
