import pg from "pg";
import * as config from "../config.js";

const pool = new pg.Pool({
  user: config.username,
  host: config.dbHost,
  database: config.dbName,
  password: config.password,
  port: config.dbPort,
  ssl: { rejectUnauthorized: false },
});

console.log("dbPort", config.dbPort);
console.log("databaseHost:-", config.dbHost);
console.log("databaseName:-", config.dbName);
console.log("username:-", config.username);
console.log("password:-", config.password);

export default function query(text, params, callback) {
  return pool.query(text, params, callback);
}
