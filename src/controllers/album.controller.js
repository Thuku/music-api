import Models from "../../models";

class AlbumController {
  static async getAllAlbums(req, res, next) {

    try {

      const albums = await Models.Album.findAll();
      if (Albums) {

        return res
          .status(200)
          .json({ message: "Albums fetched", data: albums, status: 200 });

      } else {
        return res.status(404).json({ message: "No Albums found", data: albums, status: 404 });
      }
    } catch (error) {
      return next(error);
    }
  }

  static async getAlbum(req, res, next) {

    try {

      const album = await Models.Album.findByPk(req.params.album_id);
      if (album) {

        return res
          .status(200)
          .json({ message: "Album fetched", data: album, status: 200 });

      } else {

        return res
          .status(404)
          .json({ message: "Album not fetched", data: album, status: 404 });
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
          .json({
            message: "Album details fetched",
            data: albumDetails,
            status: 200
          });
      } else {

        res.status(404).json({
          message: "Album details not found",
          data: albumDetails,
          status: 404
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
          .json({
            message: "Albums fetched successfully",
            data: artistAlbums,
            status: 200
          });

      } else {

        res.status(404).json({
          message: "Albums not found",
          data: albumDetails,
          status: 200
        });

      }
    } catch (error) {
      return next(error);
    }
  }
}

export default AlbumController;
