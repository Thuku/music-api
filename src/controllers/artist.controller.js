import Models from "../../models";

class ArtistController {

  static async getAllArtists(req, res, next) {
    try {
      const artists = await Models.Artist.findAll();

      if (allArtists) {

        return res.status(200).json({
          message: "Artists fetched successfully",
          data: artists,
          status: 200
        });
      } else {

        return res.status(404).json({
          message: "No artists fetched ",
          data: artists,
          status: 404
        });
      }
    } catch (error) {
      return next(error);
    }
  }

  static async getArtist(req, res, next) {
    try {
      const artistDetails = await Models.Artist.findByPk(req.params.artist_id);

      if (artistDetails) {

        return res.status(200).json({
          message: "Artist details fetched successfully",
          data: artistDetails,
          status: 200
        });

      } else {

        return res.status(404).json({
          message: "No artist with given id ",
          data: artist,
          status: 404
        });
      }
    } catch (error) {
      return next(error);
    }
  }
}

export default ArtistController;
