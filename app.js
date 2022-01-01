import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { getAllCats, getCatsById } from "./models/index.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

/** DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get("/", function (req, res, next) {
  res.render("index", { title: "Books" });
});

// Get request all
app.get("/cats", async function (req, res) {
  let result = await getAllCats();
  res.json({ message: true, payload: result });
});

//Get request cats by id
app.get("/cats/:id", async function (req, res) {
  let id = Number(req.params.id);
  let result = await getCatsById(id);
  res.json({ message: true, payload: result });
});

export default app;

// /* - 👉 Add code to also handle requests for a cat by id using params and cats by name using a query. Test this in your browser. */

// app.get("/cats/:id", function (req, res) {
//   const id = Number(req.params.id);
//   function getCatsById(id) {
//     return cats.filter((cat) => {
//       return cat.id === id;
//     });
//   }
//   res.json({ message: true, payload: getCatsById(id) });
// });
