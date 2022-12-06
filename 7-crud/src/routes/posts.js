const express = require("express");
const router = express.Router("router");

// CRUD - Partes

// C mostrar el formulario
// C guardar los datos

// R leer todos los registos
router.get("/" , (req, res) => {
    res.render("posts/index" , {dir: req.baseUrl})
});
// R leer un registo

// U leer un registro, mostrar el formulario con la informacion
// U actualizo los datos del registro

// D borrar un registro

module.exports = router;