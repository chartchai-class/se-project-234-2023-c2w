
// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));

const express = require('express');
const app = express();
// const db = require("./config/db");
// const bcrypt = require('bcrypt');
// const mysql = require('mysql2');
// require('dotenv').config();
const productRoutes = require('./routes/productRoutes');

app.use(express.json());
app.use('/api/products', productRoutes);
// const PORT_USER = process.env.PORT_USER || 3000;
// const PORT_ADMIN = process.env.PORT_ADMIN || 8000;
// const userRoutes = require('./routes/userRoutes.js');
// const adminRoutes = require('./routes/adminRoutes.js');
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// กำหนด routes ที่นี่
// app.use('/user', userRoutes);
// app.use('/admin', adminRoutes);


// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME
// });

// connection.connect(error => {
//   if (error) throw error;
//   console.log('Successfully connected to the database.');
// });

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

// ไม่ควรใช้ module.exports = connection; ใน server.js
