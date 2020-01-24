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

  static async createAlbum(req, res, next) {
    try {   
      const {name, genre, price, description, label, release, totalReviews, artistId} = req.body   
      if (!name, !genre, !price, !description, !label, !release, !totalReviews, !artistId) {
        util.setResponse(400, "Provide all details", null, "error");
        util.send(res);
      } else {
        const album = {
          name,
          genre,
          price,
          description,
          label,
          release,
          totalReviews,
          artistId,
          createdAt: new Date(),
          updatedAt: new Date()
        };

        const createdAlbum = await Models.Album.create(album);
        util.setResponse(201, "Album created", createdAlbum, "success");
        util.send(res);
      }
    } catch (error) {
      next(error)
    }
  }
}

export default AlbumController;
