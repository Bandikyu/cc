const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const { pseudoRandomBytes } = require("crypto");

const traerPersonajes = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../data/personajes.json"))
);

/* Lista de personajes */
router.get("/", (req, res) => {
  res.send(traerPersonajes);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const personaje = traerPersonajes.find((personaje) => personaje.id == id);
  res.send(personaje);
});

/* Crear personaje */
router.post("/create", (req, res) => {
  const id = traerPersonajes.length;
  const nuevoPersonaje = {
    id: id + 1,
    ...req.body,
  };
  traerPersonajes.push(nuevoPersonaje);
  fs.writeFileSync(
    path.resolve(__dirname, "../data/personajes.json"),
    JSON.stringify(traerPersonajes, null, " ")
  );
  res.send("Personaje guardado con exito");
});

/* Editar personaje */
router.put("/:id/edit", (req, res) => {
  const id = req.params.id;
  let oldPj;
  let newPj;
  const nuevaLista = traerPersonajes.map((personaje) => {
    if (personaje.id == id) {
      oldPj = personaje;
      personaje = {
        id: personaje.id,
        ...req.body,
      };
      newPj = personaje;
      return personaje;
    }
    return personaje;
  });
  fs.writeFileSync(
    path.resolve(__dirname, "../data/personajes.json"),
    JSON.stringify(nuevaLista, null, " ")
  );
  res.send(
    `ANTERIOR:
    ${JSON.stringify(oldPj)}
    NUEVO:
    ${JSON.stringify(newPj)}`
  );
});

/* Eliminar personaje */
router.delete("/:id/delete", (req, res) => {
  const id = Number(req.params.id);
  if(id > traerPersonajes.length) {
    res.send("El personaje no existe");
  } 
  else {
    const nuevaLista = traerPersonajes.filter((personaje) => personaje.id !== id);
    nuevaLista.forEach((personaje, i) => {
      personaje.id = i + 1;
    });
    fs.writeFileSync(
      path.resolve(__dirname, "../data/personajes.json"),
      JSON.stringify(nuevaLista, null, " ")
    );
    res.send("Personaje eliminado.");
  }
});

module.exports = router;
