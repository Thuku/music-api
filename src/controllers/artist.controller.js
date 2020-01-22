import Models from "../../models";
class ArtistController {
  static async getAllArtists(req, res, next) {
    try {
      const allArtists = await Models.Artist.findAll();
      if (allArtists) {
        return res.status(200).json({
          message: "artists fetched successfully",
          artists: allArtists
        });
      } else {
        return res.status(200).json({
          message: "No artists fetched ",
          artists: []
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error
      });
    }
  }

  static async getArtist(req, res, next) {
    try {
      const artistDetails = await Models.Artist.findByPk(req.params.artist_id);
      if (artistDetails) {
        return res.status(200).json({
          message: "Artist details fetched successfully",
          artist: artistDetails
        });
      } else {
        return res.status(200).json({
          message: "No artists with given id ",
          artist: []
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error
      });
    }
  }
}

export default ArtistController;
