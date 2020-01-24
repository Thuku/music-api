import Models from "../../models";

class AlbumController {
  static async getAllAlbums(req, res, next) {

    try {

      const Albums = await Models.Album.findAll();
      if (Albums) {

        return res
          .status(200)
          .json({ message: "Albums fetched", albums: Albums });

      } else {
        return res.status(404).json({ message: "No Albums found", albums: [] });
      }
    } catch (error) {
      return next(error);
    }
  }

  static async getAlbum(req, res, next) {

    try {

      const album = await Models.Album.findByPk(req.params.album_id);
      if (album) {

        return res.status(200).json({ message: "Album fetched", album });

      } else {

        return res.status(404).json({ message: "Album not fetched", album });
      }
    } catch (error) {
      return next(error);
    }
  }

  static async getAlbumDetails(req, res, next) {

    try {

      const albumDetails = await Models.Album.findByPk(req.params.album_id, {
        include: [
          {
            all: true
          }
        ]
      });

      if (albumDetails) {

        return res
          .status(200)
          .json({ message: "Album details fetched", albumDetails });
      } else {

        res.status(404).json({
          message: "Album details not found",
          albumDetails: []
        });
      }
    } catch (error) {
      return next(error);
    }
  }

  static async getArtistAlbums(req, res, next) {
    try {
      //get all album for a given artist
      const artistAlbums = await Models.Album.findAll({
        where: {
          artistId: req.params.artist_id
        }
      });

      if (artistAlbums) {

        return res
          .status(200)
          .json({ message: "Albums fetched successfully", artistAlbums });

      } else {

        res.status(404).json({
          message: "Albums not found",
          albumDetails: []
        });

      }
    } catch (error) {
      return next(error);
    }
  }
}

export default AlbumController;
