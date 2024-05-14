'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    static associate({ Artist, Track }) {
      this.belongsTo(Artist, { foreignKey: 'artistId' });
      this.hasMany(Track, { foreignKey: 'albumId' });
    }
  }
  Album.init(
    {
      name: DataTypes.STRING,
      year: DataTypes.INTEGER,
      artistId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Album',
    },
  );
  return Album;
};
