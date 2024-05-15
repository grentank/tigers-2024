'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ ProductsShop, Shop }) {
      this.hasMany(ProductsShop, { foreignKey: 'productId' });
      this.belongsToMany(Shop, { through: ProductsShop, foreignKey: 'productId' });
    }
  }
  Product.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      eco: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Product',
    },
  );
  return Product;
};
