const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const generateJSONWebToken = require("../utilities/generateJWT");
const checkCredentialValidity = require("../middleware/checkCredentialValidity");

// User Sign Up

router.post("/signup", checkCredentialValidity, async (req, res) => {
  try {
    // Destructuring name, email and password from req.body.
    const { name, email, password } = req.body;

    // Checking for already existing users.
    const user = await pool.query("SELECT * FROM users WHERE userEmail = $1", [
      email,
    ]);
    if (user.rows.length !== 0) {
      return res.status(401).send("A user with this email already exists!");
    }

    // Bcrypting the user password.
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);

    // Inserting the newly signed up user into the database.
    const newUser = await pool.query(
      "INSERT INTO users (userName,userEmail, userPassword) VALUES ($1, $2, $3) RETURNING *",
      [name, email, bcryptPassword]
    );
    // res.json(newUser.rows[0]);

    //Generating a JSON Web Token for the user.
    const token = generateJSONWebToken(newUser.rows[0].userId);

    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("The server encountered an error.");
  }
});

// User login
router.post("/login", checkCredentialValidity, async (req, res) => {
  try {
    // Destructuring email and password from req.body.
    const { email, password } = req.body;
    // console.log(password);

    // Checking for existing users.
    const user = await pool.query("SELECT * FROM users WHERE userEmail = $1", [
      email,
    ]);
    if (user.rows.length === 0) {
      return res.status(401).json("You have entered an invalid email address");
    }
    // console.log(user.rows[0]);
    // Checking if the inputted password is the same as the password stored in the database.
    const isPasswordValid = await bcrypt.compare(
      password,
      user.rows[0].userpassword
    );
    // console.log(isPasswordValid);
    if (!isPasswordValid) {
      return res.status(401).json("Incorrect Password!");
    }

    // Assign a JSON Web Token to the logged in user.
    const token = generateJSONWebToken(user.rows[0].userId);
    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("The server encountered an error.");
  }
});

module.exports = router;
