const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

app.get("/" , (req, res) => {
  res.render("." , {title: "nada"});
});

app.use("/posts" , require("./src/routes/posts"))

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
