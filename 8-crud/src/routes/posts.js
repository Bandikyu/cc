const express = require("express");
const router = express.Router("router");

const PostModel = require("../models/PostModel")
// CRUD - Partes

// C mostrar el formulario de creacion
router.get("/create" , (req, res) => {
    res.render("posts/create")
});
// C guardar los datos
router.post("/store" , async (req, res) => {
    console.log(req.body);
    await PostModel.create(req.body);
    /* Despues puedo ver una manera de enviar un json como respuesta,
    y en base al contenido del json se genera un alert informando el estado del envio.
    Todo eso tendria que procesarlo en el frontend de "create" por medio de una promesa
    que se inicie con una funcion que se active con el envio del formulario */
    res.redirect("/posts/create");
    // res.send("Entraste en store");
});

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