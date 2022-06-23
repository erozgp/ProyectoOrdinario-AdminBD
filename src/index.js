const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const empleadosRoutes = require("./routes/empleados.routes");
const playlistocontrcksRoutes = require("./routes/vista_playlistcontracks.routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(empleadosRoutes);
app.use(playlistocontrcksRoutes);

app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});

app.listen(4000);
console.log("Server on Port 4000");
