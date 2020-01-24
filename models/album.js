"use strict";
module.exports = (sequelize, DataTypes) => {
  
  const Album = sequelize.define(
    "Album",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      description: DataTypes.STRING,
      totalReviews: DataTypes.STRING,
      release: DataTypes.DATE,
      genre: DataTypes.STRING,
      createdAt: { type: DataTypes.DATE },
      updatedAt: { type: DataTypes.DATE }
    },
    {}
  );
  Album.associate = function(models) {
    // associations can be defined here
    models.Album.hasMany(models.Song, {
      foreignKey: "artistId",
    });
    models.Album.belongsTo(models.Artist, {
      foreignKey: "artistId",
      as: "artist"
    });
  };
  return Album;
};
