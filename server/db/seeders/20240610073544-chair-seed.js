'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Chairs',
      [
        {
          name: 'Лучший стул',
          description: 'Очень лучший стул',
          dimensions: '100x20x50',
          image:
            'https://www.ikea.com/us/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg',
        },
        {
          name: 'Стремный стул',
          description: 'Не оч',
          dimensions: '120x20x50',
          image:
            'https://wakefitdev.gumlet.io/img/npl_modified_images/atticus/sofa_WLCHRATCFVBL/sofa_WLCHRATCFVBL_1.jpg?w=732',
        },
        {
          name: 'Кресло CH-695NLT синий TW-05 сиденье черный TW-11 сетка/ткань крестовина пластик',
          description: `Кресло Barneo K-110, газлифт 3кл
Материал сиденья: экокожа (PU)
Настройка подлокотников: нерегулируемые
Ширина подлокотников, мм.: 40
Материал крестовины: хромированный металл
Кресло снабжено поворотно-подъемным механизмом газлифт 3кл
Механизм качания: TopGun c фиксацией в одном положении
Размеры сиденья внутренние Ш*Г, мм.: 450*480
Размеры стула общие Ш*Г, мм.: 540*640
Высота сиденья от пола, мм.: 470-580
Высота стула общая, мм.: 1070 -1170
Высота спинки, мм.: 620
Диаметр крестовины, мм.: 620
Ролики нейлон прорезиненные (для ламината и паркета), мм.: 50
Вес кресла нетто, кг.: 10.5

Гарантийный срок эксплуатации: 1 год
Минимальный срок службы в домашних условиях: 3 года
Условия эксплуатации и хранения: t 0—35 °С, влажность до 80%, нагрузка на газ-лифт до 150 кг

Техническая информация для оптовых клиентов
Кол-во в стандартной упаковке, шт.: 2
Вес стандартной упаковки, кг.: 25.3
Габариты стандартной упаковки Ш*Г*В, мм: 830*590*540
Объем стандартной упаковки, кубм.: 0.265`,
          dimensions: '120x20x50',
          image: 'https://m.media-amazon.com/images/I/716tq9Y8WOL._AC_SL1500_.jpg',
        },
        {
          name: 'Деревянный стул Венский темный тон с мягким сиденьем из экокожи',
          description: `Представляем вам утонченный и изысканный деревянный стул в венском стиле, который станет прекрасным дополнением к вашему обеденному столу или гостиной. Этот стул воплощает классический венский стиль с изящными изгибами и утонченными деталями, создавая атмосферу элегантности и роскоши.
Стул изготовлен из высококачественного дерева, обеспечивая прочность и долговечность. Его изысканный дизайн с прекрасными деревянными резными элементами украсит любой интерьер и подчеркнет ваш изысканный вкус.
Ключевые особенности венского стула:
- Высококачественное дерево для прочности и долговечности;
- Классический венский стиль с изящными изгибами и деталями;
- Утонченный дизайн, подходящий для элегантных интерьеров;
- Прочная конструкция для комфортного сидения;
- Легкость в уходе и сохранении красоты деревянной поверхности.
Добавьте изысканность и благородство вашему дому с помощью этого великолепного деревянного стула в венском стиле. Он будет отличным выбором для ценителей классического дизайна и элегантности, воплощая атмосферу старинных венских кафе и роскошных салонов.`,
          dimensions: '120x20x50',
          image:
            'https://stoolmarket.ru/upload/resize_cache/iblock/429/450_450_140cd750bba9870f18aada2478b24840a/bsa3kd20gbcy7v9yo0gzzl7jbivm1380.jpg',
        },
        {
          name: 'Стул Eames style Superior белый',
          description: `Интерьерный дизайнерский стул Barneo N-12 Superior
Ножки стула поставляются в разобранном виде
Материал сиденья: Пластик PP
Материал каркаса: Дерево Бук
Размеры сиденья внутренние Ш*Г, см.: 47*42
Размеры стула общие Ш*Г, см.: 47*54
Высота сиденья от пола, см.: 45
Высота стула общая, см.: 80
Высота спинки, см.: 42
Вес стула нетто, кг.: 4

Гарантийный срок эксплуатации: 1 год
Минимальный срок службы в домашних условиях: 3 года
Условия эксплуатации и хранения: t 0—35 °С, влажность до 80%, расчетная нагрузка до 120 кг

Техническая информация для оптовых клиентов
Кол-во в стандартной упаковке (2 коробки), шт.: 10
Вес стандартной упаковки, кг.: 37.65
Объем стандартной упаковки, кубм.: 0.241`,
          dimensions: '120x20x50',
          image:
            'https://stoolmarket.ru/upload/resize_cache/iblock/456/450_450_140cd750bba9870f18aada2478b24840a/trfp45dg2diu8xuazkyo2pphc0crggqe.jpeg',
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
