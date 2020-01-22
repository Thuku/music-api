import { Router } from "express";
import AlbumController from "../controllers/album.controller";

const router = Router();
router.get("/albums", AlbumController.getAllAlbums);
router.get("/albums/:album_id", AlbumController.getAlbum);
router.get("/albums/details/:album_id", AlbumController.getAlbumDetails);
router.get("/albums/artist/:artist_id", AlbumController.getArtistAlbums);

export default router;
