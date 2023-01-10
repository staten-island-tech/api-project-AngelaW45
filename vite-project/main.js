import "./style.css";
const URL = "https://api.genshin.dev/";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response-1").textContent = data.Character;
      document.getElementById("api-response-2").textContent = Character.vision;
      console.log(response.status);
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    console.log("Could not find, please try again");
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
  Character: document.querySelector(".c"),
  Element: document.querySelector(".e"),
  WeaponType: document.querySelector(".w"),
};
