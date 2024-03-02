var express = require("express");
var app = express();
const port = 8002;

// Set the view engine to EJS
app.set("view engine", "ejs");

// Home page
app.get("/", (req, res) =>{
  res.render("index");
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
