'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Track extends Model {
    static associate({ Album }) {
      this.belongsTo(Album, { foreignKey: 'albumId' });
    }
  }
  Track.init(
    {
      title: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      albumId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Track',
    },
  );
  return Track;
};
