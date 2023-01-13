import "./style.css";
const characters = "https://genshinlist.com/api/characters";

const DOMSelectors = {
  Character: document.querySelector(".c"),
  Element: document.querySelector(".e"),
  WeaponType: document.querySelector(".w"),
  displaySection: document.getElementById("display"),
};

async function getData(characters) {
  try {
    const response = await fetch(characters);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response-1").textContent = data.name;
      document.getElementById("api-response-2").textContent = data.vision;
      document.getElementById("api-response-3").textContent = data.weapon;

      function all() {
        data.forEach((character) => {
          card(character);
        });
      }
      all();

      console.log(response.status);
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    console.log("Could not find, please try again");
  }
}
getData(characters);
``;

function card(character) {
  DOMSelectors.displaySection.insertAdjacentHTML(
    "beforeend",
    `<div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h3 class="display-name"> ${character.name} </h3>
            <h4 class="display-type"> ${character.vision} </h4>
            <h4 class="display-weapon">${character.weapon} </h4>
        </div>
        <div class="flip-card-back">
          <h3 class="display-discription"> ${character.discription}</h3>
            <h3 class="display-birthday"> ${character.birthday} </h3>
            <h4 class="display-gender"> ${character.gender} </h3>
            <h4 class="displpay-rarity">${character.rarity} </h4>
        </div>
      </div>
    </div>`
  );
}

/* const characters =
  "https://raw.githubusercontent.com/genshindev/api/mistress/assets/data/characters/ayaka/en.json";

async function getData(characters) {
  try {
    const response = await fetch(characters);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response-1").textContent = data.name;
      document.getElementById("api-response-2").textContent = data.vision;
      document.getElementById("api-response-3").textContent = data.weapon;
      console.log(response.status);
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    console.log("Could not find, please try again");
  }
}
getData(characters);
``;
 */
