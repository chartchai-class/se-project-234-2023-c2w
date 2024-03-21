var express = require("express");
var app = express();
const db = require("./config/db")(app);
const PORT_USER = process.env.PORT_USER || 3000;
const productRoutes = require('./routes/productRoutes');

app.use(express.json());
app.use('/api/products', productRoutes);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// Set the view engine to EJS
app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.use(express.static("views"));

// Route for SignIn/SignUp
app.get("/SignInUp", (req, res) => {
    res.render("SignInSignUp.ejs");
  });
  
// Route for shoe
app.get("/product_1", (req, res) => {
  res.render("product_1_view.ejs");
});

// Route for shirt
app.get("/product_2", (req, res) => {
  res.render("product_2_view.ejs");
});

// Route for trouser
app.get("/product_3", (req, res) => {
  res.render("product_3_view.ejs");
});

// Route for product detial
app.get("/product_detail", (req, res) => {
    res.render("product_details.ejs");
});

app.post("/store-location", (req, res) => {
  // ส่งข้อมูลหรือ render หน้าที่มีแผนที่ตั้งร้านค้า
  res.render("storeLocation.ejs");
});


app.listen(PORT_USER, () => {
    console.log(`User server is running on port ${PORT_USER}`);
});
