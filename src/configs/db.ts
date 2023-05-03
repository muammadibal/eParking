import { Pool } from "pg";

export default new Pool({
  max: 20,
  connectionString: `${process.env.DB_DIALECT}://${process.env.DB_USER}:${process.env.DB_PASS}@hostname:port/${process.env.DB_NAME}`,
  idleTimeoutMillis: 30000
});
