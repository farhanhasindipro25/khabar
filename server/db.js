const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "farhan1234",
  host: "localhost",
  port: 5432,
  database: "khabardabar",
});

module.exports = pool;
