module.exports = function (req, res, next) {
  const { email, name, password } = req.body;

  function isEmailValid(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  if (req.path === "/signup") {
    // Checking if all input fields have values or not.
    if (![email, name, password].every(Boolean)) {
      return res.status(401).json("You must fillup all fields!");
      // Checking if the email is valid according to the regular expression.
    } else if (!isEmailValid(email)) {
      return res.status(401).json("Please enter a valid Email ID!");
    }
  } else if (req.path === "/login") {
    if (![email, password].every(Boolean)) {
      return res.status(401).json("You must fillup all fields!");
      // Checking if the email is valid according to the regular expression.
    } else if (!isEmailValid(email)) {
      return res.status(401).json("Please enter a validEemail ID!");
    }
  }
  next();
};
