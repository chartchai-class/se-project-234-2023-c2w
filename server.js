const express = require('express');
const mysql = require('mysql2');
const session = require('express-session');
require('dotenv').config();
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const salesRoutes = require('./routes/salesRoutes');



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let PORT = process.env.PORT || 3000;

// Middlewares

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // set to true if using https
}));

// Static files
app.use(express.static("public"));
// Only if you have static files in views

// View engine
app.set("view engine", "ejs");

// Routes
app.use('/api/products', productRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/api', salesRoutes);


app.get("/admin", (req, res) => {
  res.render("signup_admin.ejs");
});

// สำหรับการสมัครสมาชิก (Sign up)
app.post('/admin/signup', async (req, res) => {
  // จัดการข้อมูลการสมัครสมาชิก
  // ถ้าสำเร็จ ให้เปลี่ยนเส้นทางไปยังหน้า dashboard
  res.redirect('/admin/dashboard');
});

// สำหรับการล็อกอิน (Sign in)
app.post('/admin/signin', async (req, res) => {
  // จัดการข้อมูลการล็อกอิน
  // ถ้าสำเร็จ ให้เปลี่ยนเส้นทางไปยังหน้า dashboard
  res.redirect('/admin/dashboard');
});


app.get("/admin/dashboard", (req, res) => {
  res.render("dashboard");
});


// Route for customers
app.get("/customers", (req, res) => {
  res.render("customers.ejs");
});

// Route for category
app.get("/category", (req, res) => {
  res.render("categoryList.ejs");
});

app.get("/cart", (req, res) => {
  res.render("cartPage.ejs");
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

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.get("/productList/add/" , (req,res) => {
  res.render("viewProductDetail")
});


app.use(express.static("views"));

// Route for SignIn/SignUp
app.get("/user", (req, res) => {
  res.render("signup_user.ejs");
});

// สำหรับการสมัครสมาชิก (Sign up)
app.post('/user/signup', async (req, res) => {
  // จัดการข้อมูลการสมัครสมาชิก
  // ถ้าสำเร็จ ให้เปลี่ยนเส้นทางไปยังหน้า homepage
  res.redirect('/user/homepage');
});

// สำหรับการล็อกอิน (Sign in)
app.post('/user/signin', async (req, res) => {
  // จัดการข้อมูลการล็อกอิน
  // ถ้าสำเร็จ ให้เปลี่ยนเส้นทางไปยังหน้า homepage
  res.redirect('/user/homepage');
});

app.get("/user/homepage", (req, res) => {
  res.render("Homepage.ejs");
});

app.get("/", (req, res) => {
  res.render("Homepage.ejs");
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

app.get("/cart", (req, res) => {
  res.render("cartPage.ejs");
});

app.post("/store-location", (req, res) => {
  // ส่งข้อมูลหรือ render หน้าที่มีแผนที่ตั้งร้านค้า
  res.render("storeLocation.ejs");
});


// กำหนด port สำหรับเซิร์ฟเวอร์
PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

