var express = require("express");
var app = express();
const port = 8003;

app.listen(port, function () {
  console.log("Server is listening on port " + port);
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

    