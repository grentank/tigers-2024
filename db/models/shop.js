'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    static associate({ ProductsShop, Product }) {
      this.hasMany(ProductsShop, { foreignKey: 'shopId' });
      this.belongsToMany(Product, { through: ProductsShop, foreignKey: 'shopId' });
    }
  }
  Shop.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Shop',
    },
  );
  return Shop;
};
