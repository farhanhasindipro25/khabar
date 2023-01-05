const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateJSONWebToken = (userId) => {
  const payload = {
    user: userId,
  };
  console.log(payload);
  return jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: "5hr" });
};

module.exports = generateJSONWebToken;
