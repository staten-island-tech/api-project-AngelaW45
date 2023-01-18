import "./style.css";
const characters = "https://genshinlist.com/api/characters";

const DOMSelectors = {
  AllCharactersBtn: document.querySelector(".c"),
  VisionTypeBtn: document.querySelector(".e"),
  WeaponTypeBtn: document.querySelector(".w"),
  FemaleBtn: document.querySelector(".f"),
  MaleBtn: document.querySelector(".m"),
  Rarity4Btn: document.querySelector(".r4"),
  Rarity5Btn: document.querySelector(".r5"),
  displaySection: document.getElementById("display"),
};

async function getData(characters) {
  try {
    const response = await fetch(characters);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();

      /*    function PyroColor() {
        DOMSelectors.displaySection.innerHTML = " ";
        data
          .filter((VisionP) => VisionP.vision === "pyro")
          .forEach((VisionP) => {
            document.getElementsByClassName(
              "flip-card-front"
            ).style.borderColor = "var(--pyro)";
            card(VisionP);
          });
      } */

      var Vision = document.getElementsByClassName(display - type);
      var color;
      var border = document.getElementById("flip-card-front");
      // .flip-card-back
      if (Vision == "pyro" || Vision == "red" || Vision == "RED") {
        color = "var(--pyro)";
        border.style.borderColor = color;
      }

      /* var getColor = prompt("Choose your color ", "Enter the  color ");
      var color;
      var el = document.getElementById("color");
      el.innerHTML = "Whatever paragraph message.";
      if (getColor =="Yellow" || getColor =="yellow" || getColor =="YELLOW"){
          color = "#FFFF66";
          el.style.borderColor = color;
      }
     
      
     .borders{
         background-color:#00ffff;
         border-color:#000000;
         border-width:2px;
         border-style:solid;
     }
     
      
     <p id="color" class="borders"></p>
 */

      function all() {
        data.forEach((character) => {
          card(character);
        });
      }
      all();

      function AllCharacters() {
        DOMSelectors.displaySection.innerHTML = " ";
        all();
      }

      function Female() {
        DOMSelectors.displaySection.innerHTML = " ";
        data
          .filter((character) => character.gender === "female")
          .forEach((character) => {
            card(character);
          });
      }

      function Male() {
        DOMSelectors.displaySection.innerHTML = " ";
        data
          .filter((character) => character.gender === "male")
          .forEach((character) => {
            card(character);
          });
      }

      function Rarity4() {
        DOMSelectors.displaySection.innerHTML = " ";
        data
          .filter((character) => character.rarity === 4)
          .forEach((character) => {
            card(character);
          });
      }

      function Rarity5() {
        DOMSelectors.displaySection.innerHTML = " ";
        data
          .filter((character) => character.rarity === 5)
          .forEach((character) => {
            card(character);
          });
      }

      DOMSelectors.FemaleBtn.addEventListener("click", function () {
        Female();
      });

      DOMSelectors.MaleBtn.addEventListener("click", function () {
        Male();
      });

      DOMSelectors.Rarity4Btn.addEventListener("click", function () {
        Rarity4();
      });

      DOMSelectors.Rarity5Btn.addEventListener("click", function () {
        Rarity5();
      });

      DOMSelectors.AllCharactersBtn.addEventListener("click", function () {
        AllCharacters();
      });

      console.log(response.status);
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    console.log("Could not find, please try again");
  }
}
getData(characters);

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

/*       function Sword() {r
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
      } */
