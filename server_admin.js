var express = require("express");
var app = express();
const port = 8000;
// const db = require("./config/db");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// Set the view engine to EJS
app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.use(express.static("views"));


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});