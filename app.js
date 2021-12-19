import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/** DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get("/", function (req, res, next) {
  res.render("index", { title: "Books" });
});

const cats = [
  {
    id: 1,
    name: "Tony",
    human: "Liz.K",
    hobby: "cling",
  },
  {
    id: 2,
    name: "Poppy",
    human: "Tim",
    hobby: "screm",
  },
  {
    id: 3,
    name: "Narla",
    human: "Mell",
    hobby: "obstruct",
  },
];

/* Your tasks for part 1: 🔻 
- 👉 Add request handlers for your API that will handle requests to the path "/cats" for all the cats, providing the data in the cats array in this file. Test this in your browser. */

app.get("/cats", function (req, res) {
  function getAllCats() {
    return cats;
  }
  res.json({ message: true, payload: getAllCats() });
});

/* - 👉 Add code to also handle requests for a cat by id using params and cats by name using a query. Test this in your browser. */

app.get("/cats/:id", function (req, res) {
  const id = Number(req.params.id);
  function getCatsById(id) {
    return cats.filter((cat) => {
      return cat.id === id;
    });
  }
  res.json({ message: true, payload: getCatsById(id) });
});

/*- 👉 Go to main.js in the public/js folder, and write the code needed to hook up the button with id "get-cats" to show the data on the front end.
 */

export default app;
