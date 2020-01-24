import Models from "../../models";
import Util from '../util'

const util = new Util()

class ArtistController {

  static async getAllArtists(req, res, next) {
    try {
      const artists = await Models.Artist.findAll();

      if (artists) {

        util.setResponse(200, "Artists fetched", artists, "success");
      } else {

        util.setResponse(404, "Artists not found", null, "success");
      }
      return util.send(res);
    } catch (error) {
      return next(error);
    }
  }

  static async getArtist(req, res, next) {
    try {
      const artistDetails = await Models.Artist.findByPk(req.params.artist_id);

      if (artistDetails) {
        util.setResponse(200, "Artist details fetched successfully", artistDetails, "success")


      } else {
        util.setResponse(404, "Artist details not found", null, "success")

      }
      return util.send(res)
    } catch (error) {
      return next(error);
    }
  }
}

export default ArtistController;
