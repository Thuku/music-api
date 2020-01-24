import { Router } from "express";
import SongController from "../controllers/song.controller";

const router = Router();
router.get("/songs", SongController.getAllSongs);
router.get("/songs/:song_id", SongController.getSong);
router.get("/songs/album/:album_id", SongController.getAlbumSongs);
router.get("/songs/artist/:artist_id", SongController.getArtistSongs);
router.post("/song", SongController.createSong)

export default router;
