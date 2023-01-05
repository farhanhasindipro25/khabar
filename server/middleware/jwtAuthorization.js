const jwt = require("jsonwebtoken");
require("dotenv").config();

// This middleware is for checking, verifying and validating the JSON Web Token of a new user before accessing the private routes
module.exports = async (req, res, next) => {
  try {
    const jwToken = req.header("token");

    // Checking if a JSON WEB TOKEN already exists or not
    if (!jwToken) {
      res.status(403).json("Unauthorized Access!");
    }

    // Checking for token validity
    //  If the token is verified, a payload will be returned.
    const payload = jwt.verify(jwToken, process.env.ACCESS_TOKEN);
    req.user = payload.user;
  } catch (error) {
    console.error(error.message);
    res.status(403).json("Unauthorized Access!");
  }
};
