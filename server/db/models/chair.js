'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chair extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Chair.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      dimensions: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Chair',
    },
  );
  return Chair;
};
