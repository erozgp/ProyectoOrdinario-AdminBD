//CONTROLADOR PARA EL CRUD EN vista_playlistocntracks.routes.js
const pool = require("../db.js");

const getAllPlaylistsTracks = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM vista_playlistcontracks");
    console.log(result.rows);

    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPlaylistsTracks
};