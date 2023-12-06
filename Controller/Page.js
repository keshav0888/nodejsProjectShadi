const asyncHandler = require("express-async-handler");
const { sequelize } = require("../DB/database");

const register = asyncHandler(async (req, res) => {
   const { name, mobile_no, email, password } = req.body;
    try {
      const result = await sequelize.query('EXEC dbo.RegisterUser :Name, :MobileNo, :Email, :Password', {
        replacements: {
          Name: name,
          MobileNo: mobile_no,
          Email: email,
          Password: password,
        },
        type: sequelize.QueryTypes.INSERT,
      });
      res.status(200).send("User Register Succussfully")
  
    } catch (error) {
      res.status(503).send("User Registertion Error")
    }
});

module.exports = { register };
