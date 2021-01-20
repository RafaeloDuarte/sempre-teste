'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'users',
      'hash',
      {
        type: Sequelize.STRING
      }
    )

    await queryInterface.addColumn(
      'users',
      'salt',
      {
        type: Sequelize.STRING
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'users',
      'hash'
    )
    await queryInterface.removeColumn(
      'users',
      'salt'
    )
  }
};
