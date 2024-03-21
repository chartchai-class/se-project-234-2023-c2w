  // Import MySQL module
  const mysql = require('mysql2');
  require("dotenv").config();

  // Create a connection to the database
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });
  
  // Connect to the database
  connection.connect(error => {
    if (error) throw error;
    console.log('Successfully connected to the database.');
  });
  
  app.post('/ad_login', async (req, res) => {
    try {
      const { firstname, lastname, email, password } = req.body;
  
      // ควรเพิ่มการเข้ารหัสรหัสผ่านที่นี่
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // สร้างผู้ใช้ใหม่ในฐานข้อมูล
      const newUser = { firstname, lastname, email, password: hashedPassword, role: 'user' };
      connection.query('INSERT INTO users SET ?', newUser, (error, results) => {
        if (error) throw error;
        // ส่งผู้ใช้ไปยังหน้าอื่นหรือแสดงข้อความว่าการสมัครสมาชิกสำเร็จ
        res.redirect('/success');
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });

  // // Create a new user object
  // const newUser = {
  // firstname: 'Jane',
  // lastname: 'Smith',
  // password: 'encrypted_password_here_2', // ใช้รหัสผ่านที่ไม่ซ้ำ
  // email: 'jane.smith@example.com',
  // role: 'admin' // Or 'admin', depending on your needs
  // };
  
  // Create a SQL query to insert a new user
  const sqlInsert = `
  INSERT INTO users (firstname, lastname, password, email, role)
  VALUES (?, ?, ?, ?, ?)
  `;
  
  // Execute the SQL query
  connection.query(sqlInsert, Object.values(newUser), (error, results, fields) => {
    if (error) throw error;
    console.log('User ID:', results.insertId);
  });
  
  module.exports = connection;
