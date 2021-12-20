import query from "../index.js";

const sqlQuery = `CREATE TABLE IF NOT EXISTS cats(
                    id SERIAL PRIMARY KEY,
                    name TEXT,
                    human TEXT,
                    hobby TEXT,
                )`;

async function createCatsTable() {
  const result = await query(sqlQuery);
  console.log(result);
}

createCatsTable();
