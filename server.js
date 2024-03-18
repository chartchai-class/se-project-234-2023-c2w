var express = require("express");
var app = express();
const port = 3306;
// const db = require("./config/db");

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

// app.post('/category/add', async (req, res) => {
//   const { category_name } = req.body;
//   try {
//       // ตรงนี้ต้องเปลี่ยนตามตารางที่เราจะแก้ไขของเราจะแก้แค่ category_name ก็ใส่แค่ category_name ส่วน value ก็คือค่าที่เราแก้ไขและเอาไป insert
//       await db.query('INSERT INTO category_table (category_name) VALUES (?)', ['<New Category>']); 

//       res.redirect('/category');
//   } catch (err) {
//       console.error('Error adding category', err);
//       res.status(500).send('Server Error');
//   }
// });



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
