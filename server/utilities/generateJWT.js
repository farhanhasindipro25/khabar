const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateJSONWebToken = (userId) => {
  const payload = {
    user: userId,
  };
  return jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: "1hr" });
};

module.exports = generateJSONWebToken;
