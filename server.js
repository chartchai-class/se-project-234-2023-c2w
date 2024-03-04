var express = require("express");
var app = express();
const port = 8003;
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));
// Set the view engine to EJS
app.set("view engine", "ejs");

// Home page
app.get("/", (req, res) =>{
  res.render("Homepage");
});
app.use(express.static('views'));


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
