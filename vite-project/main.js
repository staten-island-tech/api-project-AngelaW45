import "./style.css";
const URL = "http://api.quotable.io/random";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent = data.content;
      console.log(response.status);
      console.log(data.author);
    }
  } catch (error) {
    console.log(error);
    console.log("could not find, please try again");
  }
}
getData(URL);

function card() {
  menu.forEach((food) => {
    DOMSelectors.displaySection.insertAdjacentHTML(
      "beforeend",
`<div class="display-card" data-aos="flip-up">
  <h3 class= "display-name"> ${author.name} </h3>
  <h4 class= "display-content"> ${author.content} </h4>`;

  
const DOMSelectors = {
  AuthorBtn: document.querySelector(".a"),
  IDBtn: document.querySelector(".i"),
  LengthBtn: document.querySelector(".l"),
};
