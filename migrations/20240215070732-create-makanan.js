'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Makanans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namaPemesan: {
        type: Sequelize.STRING
      },
      namaMakanan: {
        type: Sequelize.STRING
      },
      namaMinuman: {
        type: Sequelize.STRING
      },
      harga: {
        type: Sequelize.INTEGER
      },
      totalPesanan: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Makanans');
  }
};