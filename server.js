var express = require("express");
var app = express();
const port = 8000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// Set the view engine to EJS
app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.use(express.static("views"));

// Route for product 1
app.get("/product_1", (req, res) => {
  res.render("product_1_view.ejs");
});

// Route for product 2
app.get("/product_2", (req, res) => {
  res.render("product_2_view.ejs");
});




app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
