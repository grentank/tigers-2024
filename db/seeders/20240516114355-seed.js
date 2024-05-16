'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    if(process.env.NODE_ENV==='production') return;
    await queryInterface.bulkInsert(
      'Drinks',
      [
        {
          title: 'Пивная бочка',
          volume: 50000,
          alc: 5,
        },
        {
          title: 'Вино Шардоне',
          volume: 750,
          alc: 12,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
