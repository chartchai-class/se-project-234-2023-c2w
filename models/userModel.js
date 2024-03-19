// const BaseSQLModel = require("./baseSQLModel");

// // Create a new class for a specific table
// class UserModel extends BaseSQLModel {

//   constructor() {
//     super("users"); //table 'users'
//   }

//   speak() {
//     console.log("Hello!");
//   }

//   async getUserByEmail(email) {
//     const results =  await this.findByKey('email', email);
//     return results;
//   }


// }

// const UserDB = new UserModel();

// module.exports = UserDB;
const BaseSQLModel = require('./baseSQLModel');

// Assume we're working with a table called 'users'
const userModel = new BaseSQLModel('users');

// Create a new user
userModel.create({ username: 'newuser', password: 'password123' })
  .then(newUserId => console.log(`Created new user with ID: ${newUserId}`))
  .catch(err => console.error(err));

// Get all users
userModel.findAll()
  .then(users => console.log(users))
  .catch(err => console.error(err));

// Get a specific user by ID
userModel.findById(1)
  .then(user => console.log(user))
  .catch(err => console.error(err));
