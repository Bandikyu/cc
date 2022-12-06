const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

app.get("/", async(req, res) => {
    console.log(req.headers.referer);
  res.render("inicio", {
    titulo: "Inicio",
    texto: "buenas",
    dir: req.headers.referer
  });
});

app.use(require("./src/routes/productos"));

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
