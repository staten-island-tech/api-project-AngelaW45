import "./style.css";
const characters = "https://genshinlist.com/api/characters";

const DOMSelectors = {
  AllCharactersBtn: document.querySelector(".c"),
  VisionTypeBtn: document.querySelector(".e"),
  WeaponTypeBtn: document.querySelector(".w"),
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

      function Sword() {
        DOMSelectors.displaySection.innerHTML = " ";
        data
          .filter((CharWeapon) => CharWeapon.weapon === "sword")
          .forEach((CharWeapon) => {
            card(CharWeapon);
          });
      }

      function Claymore() {
        DOMSelectors.displaySection.innerHTML = " ";
        data
          .filter((CharWeapon) => CharWeapon.weapon === "claymore")
          .forEach((CharWeapon) => {
            card(CharWeapon);
          });
      }

      function Bow() {
        DOMSelectors.displaySection.innerHTML = " ";
        data
          .filter((CharWeapon) => CharWeapon.weapon === "bow")
          .forEach((CharWeapon) => {
            card(CharWeapon);
          });
      }

      function Polearm() {
        DOMSelectors.displaySection.innerHTML = " ";
        data
          .filter((CharWeapon) => CharWeapon.weapon === "polearm")
          .forEach((CharWeapon) => {
            card(CharWeapon);
          });
      }

      function Catalyst() {
        DOMSelectors.displaySection.innerHTML = " ";
        data
          .filter((CharWeapon) => CharWeapon.weapon === "catalyst")
          .forEach((CharWeapon) => {
            card(CharWeapon);
          });
      }

      function Anemo() {
        DOMSelectors.displaySection.innerHTML = " ";
        data
          .filter((Vision) => Vision.vision === "anemo")
          .forEach((Vision) => {
            card(Vision);
          });
      }

      function Pyro() {
        DOMSelectors.displaySection.innerHTML = " ";
        data
          .filter((Vision) => Vision.vision === "pyro")
          .forEach((Vision) => {
            card(Vision);
          });
      }

      function Cryo() {
        DOMSelectors.displaySection.innerHTML = " ";
        data
          .filter((Vision) => Vision.vision === "cryo")
          .forEach((Vision) => {
            card(Vision);
          });
      }

      function Hydro() {
        DOMSelectors.displaySection.innerHTML = " ";
        data
          .filter((Vision) => Vision.vision === "hydro")
          .forEach((Vision) => {
            card(Vision);
          });
      }

      function Electro() {
        DOMSelectors.displaySection.innerHTML = " ";
        data
          .filter((Vision) => Vision.vision === "electro")
          .forEach((Vision) => {
            card(Vision);
          });
      }

      function Dendro() {
        DOMSelectors.displaySection.innerHTML = " ";
        data
          .filter((Vision) => Vision.vision === "dendro")
          .forEach((Vision) => {
            card(Vision);
          });
      }

      function Geo() {
        DOMSelectors.displaySection.innerHTML = " ";
        data
          .filter((Vision) => Vision.vision === "geo")
          .forEach((Vision) => {
            card(Vision);
          });
      }

      DOMSelectors.AllCharactersBtn.addEventListener("click", function () {
        
      });

      DOMSelectors.AllCharactersBtn.addEventListener("click", function () {
        all();
      });

      /* AllCharactersBtn: document.querySelector(".c"),
  VisionTypeBtn: document.querySelector(".e"),
  WeaponTypeBtn: document.querySelector(".w"),*/

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

/* async function getData(characters) {
  try {
    const response = await fetch(characters);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
    }
  } catch (error) {
    console.log(error);
    console.log("Could not find, please try again");
  }
}
getData(characters);
``; */

function card(character) {
  DOMSelectors.displaySection.insertAdjacentHTML(
    "beforeend",
    `<div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h2 class="display-name"> ${character.name} </h3>
            <h3 class="display-type"> Vision: ${character.vision} </h3>
            <h3 class="display-weapon"> Weapons: ${character.weapon} </h3>
        </div>
        <div class="flip-card-back">
          <h4 class="display-description"> Description: ${character.description}</h3>
            <h4 class="display-birthday"> Birthday: ${character.birthday} </h2>
            <h4 class="display-gender"> Gender: ${character.gender} </h4>
            <h4 class="displpay-rarity"> Rarity: ${character.rarity} Star</h4>
        </div>
      </div>
    </div>`
  );
}
