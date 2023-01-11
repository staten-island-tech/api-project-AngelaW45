import "./style.css";
const URL = "https://api.genshin.dev/";
const characters =
  "https://raw.githubusercontent.com/genshindev/api/mistress/assets/data/characters/ayaka/en.json";

async function getData(URL) {
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
  getData(URL);

  async function getData(characters) {
    try {
      const response = await fetch(characters);
      if (response.status < 200 || response.status > 299) {
        throw new Error(response);
      } else {
        const data = await response.json();
        document.getElementById("api-response-1").textContent = data.characters;
        /* document.getElementById("api-response-2").textContent =
          data.characters.vision; */
        console.log(response.status);
      }
    } catch (error) {
      console.log(error);
      console.log("Could not find, please try again");
    }
  }
}
getData(characters);

/* getData(characters); */

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

/* async function getData(characters) {
  try {
    const response = await fetch(characters);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response-1").textContent = data.characters;
      /* document.getElementById("api-response-2").textContent =
    data.characters.vision; */

/*   console.log(response.status);
    }
  } catch (error) {
    console.log(error);
    console.log("Could not find, please try again");
  }
} 
}
getData(URL);  */
