'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Categories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            status: {
                type: Sequelize.BOOLEAN,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
        });
        await queryInterface.addColumn('Makanans', 'category_id', {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'Categories',
                key: 'id',
                as: 'category_id',
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Categories');
        await queryInterface.removeColumn('Makanans', 'category_id');
    },
};
