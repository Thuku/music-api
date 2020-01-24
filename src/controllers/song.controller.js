import Models from "../../models";

class SongController {

  static async getAllSongs(req, res, next) {
    try {
      const allSongs = await Models.Song.findAll();
      return res.status(200).json({ message: "All songs Fetched", data: allSongs, status: 200 });
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

      return res
        .status(200)
        .json({
          status: 200,
          message: "Album songs fetched",
          data: albumSongs
        });
    } catch (error) {
      next(error)
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
      return res
        .status(200)
        .json({ message: "Song fetched successfully", data: artistSongs, status: 200 });
    } catch (error) {
      next(error)
    }
  }
}

export default SongController;
