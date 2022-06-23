//CONTROLADOR PARA EL CRUD EN empleados.routes.js
const pool = require("../db.js");

const getAllEmpleados = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM employee");
    console.log(result.rows);

    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

const getEmpleado = async (req, res, next) => {
  try {
    const employeeid = req.params.id;
    const result = await pool.query(
      "SELECT email FROM employee WHERE employeeid = $1",
      [employeeid]
    );

    //Cuando no encuentre nada en la BD retornaráa un 404
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Empleado no enontrado",
      });
      console.log(result);
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createEmpleado = async (req, res, next) => {
  const empleado = req.body;

  try {
    //PROCEDIMIENTO ALMACENADO QUE Inserta/crea un nuevo empleado sin que se requiera el reportsto pero asignando por default 1.
    //eL INSERT para empleados o este call llama al trigger que pone en minúsulas el
    const result = await pool.query(
      "call insertar_employee_sin_reportsto($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)",
      [
        empleado.employeeid,
        empleado.lastname,
        empleado.firstname,
        empleado.title,
        empleado.birthdate,
        empleado.hiredate,
        empleado.address,
        empleado.city,
        empleado.state,
        empleado.country,
        empleado.postalcode,
        empleado.phone,
        empleado.fax,
        empleado.email,
      ]
    );
    
    res.json(result);
  } catch (error) {
    //Para visualizar el error
    next(error);
  }
};

const deleteEmpleado = async (req, res, next) => {
  try {
    const employeeid = req.params.id;
    const result = await pool.query("call eliminar_employee_conId($1)", [
      employeeid,
    ]);

    //Cuando no encuentre nada en la BD retornaráa un 404
    if (result.rowCount === 0)
      return res.status(404).json({
        message: "Empleado no encontrado",
      });

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const updateEmpleado = async (req, res, next) => {
  try {
    const employeeid = req.params.id;
    const empleado = req.body;
    const result = await pool.query(
      "call actualizar_email_employee_conId($1,$2);",
      [employeeid, empleado.email]
    );
    
      
    return res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllEmpleados,
  getEmpleado,
  createEmpleado,
  deleteEmpleado,
  updateEmpleado,
};
