"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Songs",
      [
        {
          name: "Don't Go Breaking My Heart",
          duration: "3:36",
          popularity: "7",
          artistId: 1,
          albumId: 1,
          price: "1.29",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nobody Else",
          duration: "3:36",
          popularity: "4",
          artistId: 1,
          albumId: 1,
          price: "1.29",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Breathe",
          duration: "3:36",
          popularity: "7",
          artistId: 1,
          albumId: 1,
          price: "1.29",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "New Love",
          duration: "3:36",
          popularity: "5",
          artistId: 1,
          albumId: 1,
          price: "1.29",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Passionate",
          duration: "3:36",
          popularity: "9",
          artistId: 1,
          albumId: 1,
          price: "1.29",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Is It Just Me",
          duration: "3:36",
          popularity: "7",
          artistId: 1,
          albumId: 1,
          price: "1.29",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Chances",
          duration: "3:36",
          popularity: "4",
          artistId: 1,
          albumId: 1,
          price: "1.29",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No Place",
          duration: "3:36",
          popularity: "7",
          artistId: 1,
          albumId: 1,
          price: "1.29",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Chateau",
          duration: "3:36",
          popularity: "6",
          artistId: 1,
          albumId: 1,
          price: "1.29",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "The Way It Was",
          duration: "3:36",
          popularity: "7",
          artistId: 1,
          albumId: 1,
          price: "1.29",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Just Like You Like It",
          duration: "3:36",
          popularity: "8",
          artistId: 1,
          albumId: 1,
          price: "1.29",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ok",
          duration: "3:36",
          popularity: "3",
          artistId: 1,
          albumId: 1,
          price: "1.29",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Songs", null, {});
  }
};
