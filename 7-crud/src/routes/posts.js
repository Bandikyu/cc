const express = require("express");
const router = express.Router("router");

// CRUD - Partes

// C mostrar el formulario
router.get("/create" , (req, res) => {
    res.render("posts/create")
});
// C guardar los datos
router.post("/store" , (req, res) => {});

// R leer todos los registos
router.get("/" , (req, res) => {
    res.render("posts/index")
});
// R leer un registo
router.get("/:id" , (req, res) => {
    res.render("posts/show")
});
// U leer un registro, mostrar el formulario con la informacion
//modificar el regitro en el front
router.get("/:id/edit" , (req, res) => {});
// U actualizo los datos del registro
// confirmar la modificacion en el front y enviarla al back
router.put("/:id/update" , (req, res) => {});

// D borrar un registro
router.delete("/:id/delete" , (req, res) => {});

module.exports = router;