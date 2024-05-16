'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Drink.init({
    title: DataTypes.STRING,
    volume: DataTypes.INTEGER,
    alc: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Drink',
  });
  return Drink;
};