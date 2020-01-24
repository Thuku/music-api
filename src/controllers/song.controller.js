import Models from "../../models";
import Util from "../util"

const util = new Util()

class SongController {

  static async getAllSongs(req, res, next) {
    try {
      const allSongs = await Models.Song.findAll();
      if(allSongs){

        util.setResponse(200, "All songs fetched successfully", allSongs, "success")

      }else{
      util.setResponse(404, "songs not found", null, "success")
      }
      return util.send(res)
    } catch (error) {
      next(error)
    }
  }

  static async getAlbumSongs(req, res, next) {
    try {
      const albumSongs = await Models.Song.findAll({
        where: {
          albumId: req.params.album_id
        }
      });

      if (albumSongs) {

        util.setResponse(200, "Album songs fetched", albumSongs, "success")
      } else {

        util.setResponse(404, "Album songs not found", null, "success")
      }

      return util.send(res)
    } catch (error) {
      next(error)
    }
  }

  static async getSong(req, res, next) {
    try {
      const song = await Models.Song.findByPk(req.params.song_id);
      if(song){

        util.setResponse(200, "Song fetched successfully", song, "success")
      }else{

        util.setResponse(200, "Song not found", null, "success")
      }
      return util.send(res)
    } catch (error) {
      next(error)
    }
  }

  static async getArtistSongs(req, res, next) {
    try {
      const artistSongs = await Models.Song.findAll({
        where: {
          artistId: req.params.artist_id
        }
      });
      if (artistSongs) {
        util.setResponse(200, "Artist songs fetched successfully", artistSongs, "success")

        
      } else {
        util.setResponse(404, "Artist songs not found", null, "success")
      }
      return util.send(res)
    } catch (error) {
      next(error)
    }
  }
  static async createSong(req, res, next) {
    try {
      const {name, duration, popularity, artistId, albumId, price} = req.body;      
      if (!name, !duration, !popularity, !artistId, !albumId, !price) {
        util.setResponse(400, "Provide all details", null, "error");
        util.send(res);
      } else {
        const song = {
          name,
          duration,
          popularity,
          artistId,
          albumId,
          price,
          createdAt: new Date(),
          updatedAt: new Date()
        };

        const createdSong = await Models.Song.create(song);
        util.setResponse(201, "Song created", createdSong, "success");
        util.send(res);
      }
    } catch (error) {
      next(error)
    }
  }
}

export default SongController;
