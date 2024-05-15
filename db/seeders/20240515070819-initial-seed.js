'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const products = await fetch('https://fakestoreapi.com/products').then((res) => res.json());
    await queryInterface.bulkInsert(
      'Products',
      products.map((prod) => ({
        title: prod.title,
        description: prod.description,
        eco: prod.rating.rate >= 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {},
    );

    await queryInterface.bulkInsert(
      'Shops',
      [
        { name: 'Shop 1', location: 'Dubai' },
        { name: 'Пятёрочка', location: 'Moscow' },
        { name: 'Перекрёсток', location: 'Питер' },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'ProductsShops',
      new Array(50)
        .fill(null)
        .map(() => ({
          shopId: Math.floor(Math.random() * 3) + 1,
          productId: Math.floor(Math.random() * products.length) + 1,
        }))
        .filter(
          (entry, ind, arr) =>
            ind ===
            arr.findIndex((el) => el.shopId === entry.shopId && el.productId === entry.productId),
        ),
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
