import query from "../index.js";
import cats from "../../cats-data.js";

async function populateCatsTable() {
  for (let i = 0; i < cats.length; i++) {
    const name = cats[i].name;
    const human = cats[i].human;
    const hobby = cats[i].hobby;
    const res = await query(
      `INSERT INTO cats (name, human, hobby) VALUES ($1, $2, $3) RETURNING *`,
      [name, human, hobby]
    );
    console.log(res.rows[0]);
  }
}

populateCatsTable();
