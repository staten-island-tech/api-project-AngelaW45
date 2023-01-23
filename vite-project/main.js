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

      function all(data) {
        data.forEach((character) => {
          card(character);
        });
      }
      all(data);

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

async function init() {
  let GenshinData = await getData(characters);

  function AllCharacters(data) {
    DOMSelectors.displaySection.innerHTML = " ";
    all(data);
  }

  function Female(data) {
    DOMSelectors.displaySection.innerHTML = " ";
    data
      .filter((character) => character.gender === "female")
      .forEach((character) => {
        card(character);
      });
  }

  function Male(data) {
    DOMSelectors.displaySection.innerHTML = " ";
    data
      .filter((character) => character.gender === "male")
      .forEach((character) => {
        card(character);
      });
  }

  function Rarity4(data) {
    DOMSelectors.displaySection.innerHTML = " ";
    data
      .filter((character) => character.rarity === 4)
      .forEach((character) => {
        card(character);
      });
  }

  function Rarity5(data) {
    DOMSelectors.displaySection.innerHTML = " ";
    data
      .filter((character) => character.rarity === 5)
      .forEach((character) => {
        card(character);
      });
  }

  DOMSelectors.FemaleBtn.addEventListener("click", function () {
    Female(data);
  });
  DOMSelectors.MaleBtn.addEventListener("click", function () {
    Male(data);
  });
  DOMSelectors.Rarity4Btn.addEventListener("click", function () {
    Rarity4(data);
  });
  DOMSelectors.Rarity5Btn.addEventListener("click", function () {
    Rarity5(data);
  });
  DOMSelectors.AllCharactersBtn.addEventListener("click", function () {
    AllCharacters(data);
  });
}
init();
