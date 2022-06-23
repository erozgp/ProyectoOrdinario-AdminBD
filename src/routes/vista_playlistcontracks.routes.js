const { Router } = require("express");
const { getAllPlaylistsTracks } = require("../controllers/vista_playlistcontracks.controller");


const router = Router();

//CRUD DE RUTAS PARA EMPLEADOS

router.get("/playlistcontracks", getAllPlaylistsTracks);

module.exports = router;
