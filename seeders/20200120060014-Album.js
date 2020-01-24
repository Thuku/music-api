"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Albums",
      [
        {
          id: 1,
          name: "DNA",
          price: "11.99",
          description:
            "There’s one question the Backstreet Boys can’t seem to escape: Do they still consider themselves a boy band? The five-piece, most of whom are now over 40 and married with children, have come to embrace the term. “At this point, ‘boys' has come to mean more, like, ‘friends,’ Kevin Richardson told Apple Music’s Arjan Timmermans. “It keeps us young.” There might be some truth to that. On their ninth album DNA, the group dabbles in the sounds that are driving mainstream music in 2019: mid-tempo EDM (“Don’t Go Breaking My Heart”), ’80s-inspired synth-pop (“Is It Just Me”), and heart-on-sleeve country (“You’re my daybreak/You’re my California sun/You’re my Memphis, New York, New Orleans all rolled into one,” they croon on “No Place”). Even when they’re experimenting, though, they always feel familiar—they’ve still got those irresistible five-part harmonies, R&B leanings, and swoonworthy come-ons that made fans fall in love with them 25 years ago. The slick and swaggering “New Love” sounds like classic BSB. “There are moments when all five of us are like, ‘Oh, dude, absolutely, Brian Littrell said of the moment they first heard the song. That’s what you’re striving for",
          label: "2018 K-Bahn, LLC & RCA Records, a division of Sony Music",
          genre: "Pop",
          release: "Jan 25, 2019",
          totalReviews: "503",
          artistId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Albums", null, {});
  }
};
