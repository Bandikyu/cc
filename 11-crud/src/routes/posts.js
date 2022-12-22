const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");

// CRUD - Partes

// C mostrar el formulario de creacion
router.get("/create", PostController.create);
// C guardar los datos
router.post("/store", PostController.store);

// R leer (traer) todos los registos
router.get("/", PostController.allPosts);
// R leer (traer) un registo
router.get("/:id", PostController.showPost);

// U leer un registro, mostrar el formulario con la informacion
//modificar el regitro en el front
router.get("/:id/edit", PostController.formEdit);
// U actualizo los datos del registro
// confirmar la modificacion en el front y envia al back
router.put("/:id/update", PostController.confirmEdit);

// D borrar un registro
router.delete("/:id/delete", PostController.deletePost);

module.exports = router;
