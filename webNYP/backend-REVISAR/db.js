import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "enyp_db",
  password: "141900",
  port: 5432,
});

export default pool;
