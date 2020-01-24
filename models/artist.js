"use strict";
module.exports = (sequelize, DataTypes) => {

  const Artist = sequelize.define(
    "Artist",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      createdAt: { type: DataTypes.DATE },
      updatedAt: { type: DataTypes.DATE }
    },
    {}
  );
  
  Artist.associate = function(models) {
    models.Artist.hasMany(models.Song, {
      foreignKey: "artistId",
      as: "songs"
    });
    models.Artist.hasMany(models.Album, {
      foreignKey: "artistId",
      as: "albums"
    });
  };
  return Artist;
};
