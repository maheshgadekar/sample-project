// db.js
const { Sequelize } = require('sequelize');

// Create a Sequelize instance
const sequelize = new Sequelize('your_database_name', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Set to true to enable logging of SQL queries
});

const authenticateDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Call the function to authenticate and log success or error
authenticateDatabase();

module.exports = sequelize;
