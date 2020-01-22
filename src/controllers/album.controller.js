import Models from "../../models";

class AlbumController {
  static async getAllAlbums(req, res, next) {
    try {
      const Albums = await Models.Album.findAll();
      if (Albums) {
        return res
          .status(200)
          .json({ message: "albums fetched", albums: Albums });
      } else {
        return res.status(200).json({ message: "No Albums found", albums: [] });
      }
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error
      });
    }
  }

  static async getAlbum(req, res, next) {
    try {
      const album = await Models.Album.findByPk(req.params.album_id);
      return res.status(200).json({ message: "album fetched", album });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error
      });
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
        res.status(200).json({
          message: "Album details not found",
          albumDetails: []
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error
      });
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
      return res
        .status(200)
        .json({ message: "Albums fetched successfully", artistAlbums });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error
      });
    }
  }
}

export default AlbumController;
