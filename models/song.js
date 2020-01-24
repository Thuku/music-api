"use strict";
module.exports = (sequelize, DataTypes) => {
  
  const Song = sequelize.define(
    "Song",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      duration: DataTypes.STRING,
      popularity: DataTypes.STRING,
      createdAt: { type: DataTypes.DATE },
      updatedAt: { type: DataTypes.DATE }
    },
    {}
  );
  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsTo(models.Artist, { foreignKey: "artistId", as: "artist" });
    Song.belongsTo(models.Album, {
      foreignKey: "albumId",
      as: "album"
    });
  };
  return Song;
};
