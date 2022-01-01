import query from "../db/index.js";

export async function getAllCats() {
  const data = await query(`SELECT * FROM cats;`);
  return data.rows;
}

export async function getCatsById(id) {
  const data = await query(`SELECT * FROM cats WHERE id = $1;`, [id]);
  console.log(data);
  return data.rows;
}

// app.get("/cats/:id", function (req, res) {
//   const id = Number(req.params.id);
//   function getCatsById(id) {
//     return cats.filter((cat) => {
//       return cat.id === id;
//     });
//   }
//   res.json({ message: true, payload: getCatsById(id) });
// });
