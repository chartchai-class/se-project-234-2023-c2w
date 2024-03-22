
const express = require('express');
const app = express();
const db = require("./config/db");
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
require('dotenv').config();
const productRoutes = require('./routes/productRoutes');

app.use(express.json());
const session = require('express-session');
app.use('/api/products', productRoutes);
const userRoutes = require('./routes/userRoutes.js');
const adminRoutes = require('./routes/adminRoutes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


// กำหนด routes ที่นี่
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

app.get("/admin", (req, res) => {
  res.render("signup_admin.ejs");
});

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.get("/admin", (req, res) => {
  res.render("dashboard.ejs");
});
app.use(express.static("views"));

// Route for customers
app.get("/customers", (req, res) => {
    res.render("customers.ejs");
  });

// Route for category
app.get("/category", (req, res) => {
  res.render("categoryList.ejs");
});

// Route for All product
app.get("/productList", (req, res) => {
  res.render("productList.ejs");
});

// Route for history
app.get("/salesHistory", (req, res) => {
  res.render("salesHistory.ejs");
});

// Route for Sign out
app.get("/logOut", (req, res) => {
  res.render("signup_admin.ejs");
});

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect(error => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

// Set the view engine to EJS
app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.use(express.static("views"));

// Route for SignIn/SignUp
app.get("/user", (req, res) => {
    res.render("signup_user.ejs");
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

// // ตัวอย่างการใช้ app.post ใน server.js หรือ route file
// app.post('/signup_admin', async (req, res) => {
//   const { firstname, lastname, email, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = { firstname, lastname, email, password: hashedPassword, role: 'admin' };
//   connection.query('INSERT INTO users SET ?', newUser, (error, results) => {
//     if (error) {
//       console.error(error);
//       return res.status(500).send('Server error');
//     }
//     res.redirect('/success');
//   });
// });

// กำหนด port สำหรับเซิร์ฟเวอร์
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

