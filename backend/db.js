const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "postgres",
  database: "enyp_db",
  password: "141900",
  port: 5432,
});

module.exports = pool;