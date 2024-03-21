const express = require('express');
const app = express();
const db = require('./config/db'); // Import db.js

// Import MySQL module
const mysql = require('mysql2');
require("dotenv").config();

// ตั้งค่าการเชื่อมต่อกับฐานข้อมูล
const connection = db(mysql, process.env); // ส่ง mysql module และ environment variables ไปยัง db.js

const PORT_ADMIN = process.env.PORT_ADMIN || 8000;

// Middleware
app.use(express.json());

// const bcrypt = require("bcryptjs");


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// Set the view engine to EJS
app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("ad_login.ejs");
});

const session = require('express-session');

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.get("/", (req, res) => {
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





// app.post("/auth/register", (req, res) => {    
//   const { name, email, password, password_confirm } = req.body

//   db.query('SELECT email FROM users WHERE email = ?', [email], async (error, ress) => {
//     if( result.length > 0 ) {
//       return res.render('register', {
//           message: 'This email is already in use'
//       })
//   } else if(password !== password_confirm) {
//       return res.render('register', {
//           message: 'Passwords do not match!'
//       })
//   }
//   let hashedPassword = await bcrypt.hash(password, 8)

//         db.query('INSERT INTO users SET?', {name: name, email: email, password: hashedPassword}, (err, res) => {
//             if(error) {
//                 console.log(error)
//             } else {
//                 return res.render('register', {
//                     message: 'User registered!'
//                 })
//             }
//         })
//  })
// })

app.use(express.static("views"));

app.get("/dashboard", (req, res) => {
  res.render("dashboard.ejs");
});


// Start the server
app.listen(PORT_ADMIN, () => {
  console.log(`Admin server is running on port ${PORT_ADMIN}`);
});
