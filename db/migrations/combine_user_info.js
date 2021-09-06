'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.addColumn('User', 'userInfo_id', {
            type: Sequelize.INTEGER,
            references: {
                model: 'userInfo',
                key: 'id'
            },
            allowNull: true,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.removeColumn('User', 'userInfo_id')
    }
};
