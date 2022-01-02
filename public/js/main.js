//const url = "/api";

// QuerySelector returns the first element that matches a specific CSS selector
// Define the element using CSS selector
const catsSection = document.querySelector("#cats");
const getCatsButton = document.querySelector("#get-cats");
const submitButton = document.querySelector("button[type='submit']");

// Add event listener
submitButton.addEventListener("click", handleSubmit);
getCatsButton.addEventListener("click", handleClick);

function handleSubmit(event) {
  event.preventDefault();
  addCatInfo();
}
//`${url}/cats`

async function addCatInfo() {
  console.log(gatherFormData());
  const response = await fetch(`/cats`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gatherFormData()),
  });
  const data = await response.json();
  console.log(data);
}

function gatherFormData() {
  const catName = document.querySelector("#catName").value;
  const humanName = document.querySelector("#humanName").value;
  const hobby = document.querySelector("#hobby").value;
  return {
    name,
    human,
    hobby,
  };
}

function handleClick(event) {
  event.preventDefault();
  getCats();
}

// Automatically display all the cats available on the database

async function getCats() {
  const response = await fetch(`/cats`);
  const { payload } = await response.json();
  catsSection.innerHTML = "";
  console.log(payload);
  payload.forEach(renderCat);
}

function renderCat(cat) {
  const article = createCatArticle(cat);
  catsSection.appendChild(article);
}

//create tag <article> inside the section id="cats"
function createCatArticle({ name, human, hobby }) {
  const article = document.createElement("article");
  const h2CatName = document.createElement("h2");
  h2CatName.innerText = `Cat name: ${name}`;
  const h3HumanName = document.createElement("h3");
  h3HumanName.innerText = `Human servant: ${human}`;
  const h3Hobby = document.createElement("h3");
  h3Hobby.innerText = `Favorite hobby: ${hobby}`;
  article.appendChild(h2CatName);
  article.appendChild(h3HumanName);
  article.appendChild(h3Hobby);
  console.log(h2CatName);
  console.log(h3Hobby);
  return article;
}

getCats();
