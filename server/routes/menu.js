const router = require("express").Router();
const pool = require("../db");
const verifyToken = require("../middleware/verifyToken");

// API for reading all the items from the menuitems DB
router.get("/", async (req, res) => {
  try {
    const fullMenu = await pool.query("SELECT * FROM menuitems");
    // console.log(fullMenu.rows.length);
    res.json(fullMenu.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("The server encountered an error.");
  }
});

// API for verifying a authenticated user to the private route menu.
router.get("/", verifyToken, async (req, res) => {
  try {
    //req.user contains the payload containing the user information
    // res.json(req.user);

    const user = await pool.query(
      "SELECT username FROM users WHERE userid = $1",
      [req.user]
    );
    res.send("User Token Verified");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("The server encountered an error.");
  }
});

// API for inserting new items to the menuitems DB
router.post("/", async (req, res) => {
  try {
    // Destructuring attributes from req.body
    const { img, price, item, description, restuarant, restuarantLocation } =
      req.body;
    // console.log(req.body);
    // Inserting new menu items
    const newMenuItem = await pool.query(
      "INSERT INTO menuitems (itemImage, itemPrice, menuItem, itemDescription, restuarant, restuarantLocation) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [img, price, item, description, restuarant, restuarantLocation]
    );
    // console.log(newMenuItem.rows[0]);
    // res.json(newMenuItem.rows[0]);
    res.json("Item Added Successfully");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("The server encountered an error.");
  }
});

module.exports = router;
