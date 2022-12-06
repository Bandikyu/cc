const express = require("express");
const router = express.Router();

router.get("/productos", (req, res) => {
  res.render("inicio", {
    titulo: "PRODUCTOS",
    texto: "Productos",
    dir: req.headers.referer
  });
});

module.exports = router;
