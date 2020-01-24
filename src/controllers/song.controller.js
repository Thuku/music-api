import Models from "../../models";

class SongController {
  /**
   * This method gets all songs
   */
  static async getAllSongs(req, res, next) {
    try {
      const allSongs = await Models.Song.findAll();
      return res.status(200).json({ message: "All songs Fetched", allSongs });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error
      });
    }
  }

  /**
   * This method gets album songs
   *
   */

  static async getAlbumSongs(req, res, next) {
    try {
      const albumSongs = await Models.Song.findAll({
        where: {
          albumId: req.params.album_id
        }
      });

      return res
        .status(200)
        .json({
          status: 200,
          message: "Album songs fetched",
          data: albumSongs
        });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error
      });
    }
  }

  static async getSong(req, res, next) {
    try {
      const song = await Models.Song.findByPk(req.params.song_id);
      if(song){

      
      return res
        .status(200)
        .json({ message: "Song fetched successfully", data: song , status: 200 });
      }else{
        return res
        .status(404)
        .json({status: 404, data:song, message: "Song Not found" });
      }
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error
      });
    }
  }

  static async getArtistSongs(req, res, next) {
    try {
      const artistSongs = await Models.Song.findAll({
        where: {
          artistId: req.params.artist_id
        }
      });
      return res
        .status(404)
        .json({ message: "Song fetched successfully", artistSongs });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error
      });
    }
  }
}

export default SongController;
