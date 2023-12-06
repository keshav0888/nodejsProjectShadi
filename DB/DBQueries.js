const { sequelize } = require("./database");
const DBQueries=()=>{};
DBQueries.register=(
name,
mobile_no,
email,
password
)=>{
    return new Promise(function (resolve){
        sequelize.query('EXEC dbo.RegisterUser :Name, :MobileNo, :Email, :Password', {
            replacements: {
              Name: name,
              MobileNo: mobile_no,
              Email: email,
              Password: password,
            },
            type: sequelize.QueryTypes.INSERT,
          }).then((result)=>{
              resolve(result)
          }).catch(function (err){
            console.log(err)
            res.status(503).json(err)
          })
    }).catch(function(err){
        console.log(err)
        res.status(503).json(error)
    })
}
module.exports={DBQueries}