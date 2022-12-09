const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

const connection = require("./src/models/connection");

app.get("/", (req, res) => {
  connection.query("SELECT * FROM productos", (error, results, field) => {
    console.log(error, results, field);
  });
  res.render("index");
});

/* app.get("/" , (req, res) => {
  res.render("index" , {title: "nada"});
}); */

app.use("/posts", require("./src/routes/posts"));

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
