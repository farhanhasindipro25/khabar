const jwt = require("jsonwebtoken");
require("dotenv").config();

// This middleware is for checking, verifying and validating the JSON Web Token of a new user before accessing the private routes
module.exports = function (req, res, next) {
  try {
    // Taking the token from the header
    const token = req.header("token");
    // console.log("Token", token);

    // Checking if a JSON WEB TOKEN already exists or not
    if (!token) {
      return res.status(403).json("Unauthorized Access!");
    }
    // Checking for token validity
    //  If the token is verified, a payload will be returned.
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN);
    // console.log("Payload", payload);
    req.user = payload.user;
    // console.log("Req.User", req.user);
    next();
  } catch (error) {
    console.error(error.message);
    res.status(403).json("Unauthorized Access!");
  }
};
