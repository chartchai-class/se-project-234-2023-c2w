var express = require("express");
var app = express();
const port = 8000;
const db = require("./config/db");
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



app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
