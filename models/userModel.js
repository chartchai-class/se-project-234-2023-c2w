const BaseSQLModel = require("./BaseSQLModel");


class UserModel extends BaseSQLModel {
  constructor() {
    super("users");
  }


  // Create a new user with hashed password
  async createUser(userData) {
    try {
      // Check if email exists
      const userExists = await this.findByKey("email", userData.email);
      if (userExists) {
        throw new Error("User with this email already exists");
      }

      // Hash the password
      const hashedPassword = await this.hashPassword(userData.password);
      userData.password = hashedPassword;

      // Create the user
      const newUserId = await this.create(userData);
      console.log(`Created new user with ID: ${newUserId}`);
      return newUserId;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  // Get all users
  async getAllUsers() {
    try {
      const users = await this.findAll();
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }

  // Get a specific user by ID
  async getUserById(userId) {
    try {
      const user = await this.findById(userId);
      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  }

  // Get a specific user by email (unique key)
  // (this is a separate function to avoid confusion with the getUserById function)
  async getUserByEmail(email) {
    try {
      const user = await this.findByKey("email", email);
      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  }

  // Update a user by ID
  async updateUser(userId, updateData) {
    try {
      if (updateData.password) {
        updateData.password = await this.hashPassword(updateData.password);
      }

      const affectedRows = await this.update(userId, updateData);
      console.log(`Updated ${affectedRows} user(s)`);
      return affectedRows;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }

  // Delete a user by ID
  async deleteUser(userId) {
    try {
      const affectedRows = await this.delete(userId);
      console.log(`Deleted ${affectedRows} user(s)`);
      return affectedRows;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }

  async getUserByEmail(email) {
    const query = `SELECT * FROM ${this.tableName} WHERE email = ?`;
    const results = await this.executeQuery(query, [email]);
    return results[0];
  }

  async findById(userId) {
    const query = `SELECT * FROM ${this.tableName} WHERE user_id = ?`;
    const results = await this.executeQuery(query, [userId]);
    return results[0];
  }

  // Add a new function to update the user role
  async updateUserRole(userId, newRole) {
    try {
      const query = "UPDATE users SET role = ? WHERE user_id = ?";
      const result = await this.executeQuery(query, [newRole, userId]);
      console.log(`Updated role for user ID ${userId}`);
      return result.affectedRows;
    } catch (error) {
      console.error("Error updating user role:", error);
      throw error;
    }
  }
}
module.exports = new UserModel();
