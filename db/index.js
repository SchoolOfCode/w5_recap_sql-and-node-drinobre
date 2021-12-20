import pg from "pg";
import * as config from "../config.js";

const pool = new pg.Pool({
  user: config.username,
  host: config.dbHost,
  database: config.dbName,
  port: config.dbHost,
});

const query = (text, params) => {
  return pool.query(text, params);
};

export default query;
