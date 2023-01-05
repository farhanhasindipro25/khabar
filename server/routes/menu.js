const router = require("express").Router();
const pool = require("../db");
const verifyToken = require("../middleware/verifyToken");

router.get("/", verifyToken, async (req, res) => {
  try {
    //req.user contains the payload containing the user information
    // res.json(req.user);

    const user = await pool.query(
      "SELECT username FROM users WHERE userid = $1",
      [req.user]
    );
    res.json(user.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("The server encountered an error.");
  }
});

module.exports = router;
