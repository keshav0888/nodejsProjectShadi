const  Sequelize = require('sequelize');

// Replace the following with your SQL Server credentials
const sequelize = new Sequelize('matrimonyDatabase', 'keshavshinde', '123456', {dialect: 'mssql'});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  })

module.exports={sequelize}













// const mssql = require('mssql');

// // Configuring the connection
// const config = {
//   user: 'keshavshinde',
//   password: '123456',
//   server: 'LAPTOP-FCG2GIH7',
//   database: 'matrimonyDatabase',
// };
// mssql.connect(config)
//   .then(() => {
//     console.log('Connection successful');
//   })
//   .catch((err) => {
//     console.error('Connection failed:', err);
//   });
