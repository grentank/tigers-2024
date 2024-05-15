'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductsShop extends Model {
    static associate({ Product, Shop }) {
      this.belongsTo(Product, { foreignKey: 'productId' });
      this.belongsTo(Shop, { foreignKey: 'shopId' });
    }
  }
  ProductsShop.init(
    {
      productId: DataTypes.INTEGER,
      shopId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ProductsShop',
    },
  );
  return ProductsShop;
};
