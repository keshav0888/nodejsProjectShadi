const express = require("express");
const router = express.Router();
const {
  register
} = require("../Controller/Register");
//router.route("/register").get(getData);
router.route("/register").post(register);

module.exports = router;
