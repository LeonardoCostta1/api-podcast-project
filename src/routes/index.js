import express from "express";
import ArtistController from "../controller/artist.js";
const routes = express.Router()

routes
.get('/',ArtistController.index)
.post('/',ArtistController.create)
.put('/:id',ArtistController.update)

export default routes;