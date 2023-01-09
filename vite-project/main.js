import "./style.css";
const URL = "http://api.quotable.io/random";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response1").textContent = data.content;
      document.getElementById("api-response2").textContent = data.author;
      console.log(response.status);
      console.log(data.author);
      console.log(data.content);
    }
  } catch (error) {
    console.log(error);
    console.log("could not find, please try again");
  }
}
getData(URL);

/* function card() {
  DOMSelectors.displaySection.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card">
  <h3 class= "display-name"> ${data.name} </h3>
  <h4 class= "display-content"> ${data.content} </h4>
  </div>`
  );
}
card(); */

const DOMSelectors = {
  AuthorBtn: document.querySelector(".a"),
  IDBtn: document.querySelector(".i"),
  LengthBtn: document.querySelector(".l"),
};
