var express = require("express");
var app = express();
const PORT = 8003;
const connection = require('./config/db');


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

// // Route for product 3
// app.get("/product_3", (req, res) => {
//     res.render("product_3_view.ejs");
// });

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
