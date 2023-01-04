const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors());

// Routes
// Login and Sign Up Routes

app.use("/auth", require("./routes/jwtAuth"));

app.get("/", (req, res) => {
  res.send("Khabar server running.");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
