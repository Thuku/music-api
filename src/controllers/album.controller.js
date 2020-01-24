import Models from "../../models";
import Util from "../util/index"

const util = new Util()
class AlbumController {
  static async getAllAlbums(req, res, next) {

    try {

      const albums = await Models.Album.findAll();

      if (albums) {
        
        util.setResponse(200, "Albums fetched", albums, "success")
      } else {
        util.setResponse(404, "No Albums found", null, "error")
      }
      return util.send(res)
    } catch (error) {
      return next(error);
    }
  }

  static async getAlbum(req, res, next) {

    try {

      const album = await Models.Album.findByPk(req.params.album_id);
      if (album) {

        util.setResponse(200, "Album fetched", album, "success")

      } else {

        util.setResponse(404, "Album not found", album, "success")

      }
      return util.send(res)
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

        util.setResponse(200, "Album details fetched", albumDetails, "success")
      } else {

        util.setResponse(404, "Album detail not found", albumDetails, "success")

      }

      return util.send(res)
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

        util.setResponse(200, "Albums fetched", artistAlbums, "success")

      } else {

        util.setResponse(404, "Albums not found", artistAlbums, "success")
 
      }

      return util.send(res)
    } catch (error) {
      return next(error);
    }
  }
}

export default AlbumController;
