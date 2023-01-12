import "./style.css";
const characters =
  "https://raw.githubusercontent.com/genshindev/api/mistress/assets/data/characters/ayaka/en.json";

async function getData(characters) {
  try {
    const response = await fetch(characters);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response-1").textContent = data.characters; DOES NOT WORK
      console.log(response.status);
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    console.log("Could not find, please try again");
  }
}
getData(characters);

const DOMSelectors = {
  Character: document.querySelector(".c"),
  Element: document.querySelector(".e"),
  WeaponType: document.querySelector(".w"),
};

/* const URL = "https://api.genshin.dev/"; */

/* async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(response.status);
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    console.log("The status is above 299, something went wrong");
  }
  getData(URL); */
