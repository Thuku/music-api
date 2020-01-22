import { Router } from "express";
import ArtistController from "../controllers/artist.controller";

const router = Router();
router.get("/artists", ArtistController.getAllArtists);
router.get("/artists/:artist_id", ArtistController.getArtist);

export default router;
