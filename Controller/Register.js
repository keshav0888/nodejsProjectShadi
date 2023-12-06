const asyncHandler = require("express-async-handler");
const paramsValidator = require("./ParamsValidator");
const errorList = require("../Public/errorList");
const { DBQueries } = require("../DB/DBQueries");
const register = asyncHandler(async (req, res) => {
  return new Promise(async function (resolve) {
    const paramsName = ["name", "mobile_no", "email", "password"];
    const blankParams = [];
    const paramsWithNull = [];
    paramsValidator(req.body, paramsName, paramsWithNull, blankParams)
      .then(function (paramsError) {
        if (paramsError.undefinedParams.length != 0) {
          console.log(errorList.undefinedParams + paramsError.undefinedParams);
          res
            .status(400)
            .send(errorList.undefinedParams + paramsError.undefinedParams);
        } else if (paramsError.blankParams.length != 0) {
          console.log(errorList.blankParams + paramsError.blankParams);
          res.status(400).send(errorList.blankParams + paramsError.blankParams);
        }
        if (paramsError.nullParams.length != 0) {
          console.log(errorList.nullParams + paramsError.nullParams);
          res.status(400).send(errorList.nullParams + paramsError.nullParams);
        } else {
          const { name, mobile_no, email, password } = req.body;
          DBQueries.register(name, mobile_no, email, password)
            .then((result) => {
              res.send("Succuss");
            })
            .catch(function (err) {
              console.log(err);
              res.status(503).json(err);
            });
        }
      })
      .catch(function (err) {
        console.log(err);
        res.status(503).json(err);
      });
       resolve();
  });
});

module.exports = { register };
