const { Product, Shop, ProductsShop } = require('./db/models');

(async () => {
  //   const shops = await Shop.findAll();
  //   console.log(shops.map((el) => el.get()));
  //   const products = await Product.findAll();
  //   console.log(products.map((el) => el.get()));
  const shop = await Shop.findOne({
    where: { location: 'Dubai' },
    include: {
      model: ProductsShop,
      include: {
        model: Product,
      },
    },
  });
  console.log(JSON.stringify(shop, null, 2));
  //   const shop = await Shop.findOne({
  //     where: { location: 'Dubai' },
  //     include: Product,
  //   });
  //   console.log(JSON.parse(JSON.stringify(shop)));
  const ecoProducts = await Product.findAll({
    where: { eco: true },
    include: Shop,
  });
  console.log(
    '\n'.repeat(5),
    JSON.parse(JSON.stringify(ecoProducts.filter((product) => product.Shops.length === 0))),
  );
})();
