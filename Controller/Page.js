const asyncHandler = require("express-async-handler");
const { mssql } = require("../DB/database");
const register = asyncHandler(async (req, res) => {
 // const { name, mobile_no, email, password } = req.body;
  let name="keshav",mobile_no=9422517682,email='shindekeshav002@gmail.com',password='mansi'
  const client = await mssql.connect(); 
  try {
    const result = await client.query(`
      INSERT INTO Users (Name, MobileNo, Email, Password)
      VALUES ($1, $2, $3, $4)
    `, [name, mobile_no, email, password]);

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    client.release();
  }
});

module.exports = { register };
