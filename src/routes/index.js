import { Router } from "express";

import SongRoute from "./song.route";
import ArtistRoute from "./artist.route";
import AlbumRoute from "./album.route";

const routes = Router();

routes.use("/", SongRoute);
routes.use("/", ArtistRoute);
routes.use("/", AlbumRoute);

export default routes;
