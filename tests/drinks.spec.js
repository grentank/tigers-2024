const { Drink, sequelize } = require('../db/models');
const { Op } = require('sequelize');

describe('Тестирование модели', () => {
  afterAll(() => {
    sequelize.close();
  });
  it('Всего 2 напитка', async () => {
    const count = await Drink.count();
    expect(count).toBe(2);
  });
  it('Присутствует пиво', async () => {
    const drink = await Drink.findOne({
      where: {
        title: {
          [Op.iLike]: '%пив%',
        },
      },
      order: [['id', 'DESC']]
    });
    expect(drink).not.toBeNull();
  });
});
