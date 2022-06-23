const { Router } = require("express");
const {
  getAllEmpleados,
  getEmpleado,
  createEmpleado,
  deleteEmpleado,
  updateEmpleado,
} = require("../controllers/empleados.controller");


const router = Router();

//CRUD DE RUTAS PARA EMPLEADOS

router.get("/empleados", getAllEmpleados);

router.get("/empleados/:id", getEmpleado);

router.post("/empleados", createEmpleado);

router.delete("/empleados/:id", deleteEmpleado);

router.put("/empleados/:id", updateEmpleado);

module.exports = router;
