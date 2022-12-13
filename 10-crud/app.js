const express = require("express");
const path = require("path");
const app = express();
require('dotenv').config();
const methodOverride = require("method-override");


app.use(express.urlencoded());
app.use(methodOverride("_method"))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

const connection = require("./src/models/connection");

app.get("/", (req, res) => {
  connection.query("SELECT * FROM productos", (error, results, field) => {
    // console.log(error, results, field);
    if(error) {
      throw(error);
    }
  })
  res.render("index");
});

app.use("/posts", require("./src/routes/posts"));

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
