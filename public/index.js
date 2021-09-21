const pokePic = document.getElementById("img-holder");
const appearMsg = document.getElementById("appearTxt");
const choiceBtns = document.getElementById("btn-holder");
const pokeStorage = document.getElementById("caught-pokemon");
const searchBtn = document.getElementById("searchBtn");
const lvl = document.getElementById("lvl");
const nextLvl = document.getElementById("nextlvl");
const screen = document.getElementById("screen");
const textBox = document.getElementById("text-box");
const catchBtn = document.getElementById("catchBtn");
const fightBtn = document.getElementById("fightBtn");

let pokeName = "";
let playerXp = 0;
let sprite = "";
let playerLvl = 0;
const levels = [0, 50, 100, 175, 250, 500, 1000, 2000, 6000, 10000];
let nextlv = 50;

document.getElementById("searchBtn").onclick = function () {
  let rand = Math.floor(Math.random() * 890);
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${rand}`)
    .then(function (response) {
      screen.style.backgroundImage = `url('https://www.digitaleidoscope.com//wp-content/uploads/2015/06/ps_02_04.gif')`;
      pokePic.style.backgroundImage = "none";
      textBox.style.visibility = "hidden";
      setTimeout(() => {
        textBox.style.visibility = "visible";
        screen.style.backgroundImage = `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d874gjl-59e79083-fec5-4234-8879-2aa8afd7f9f4.png/v1/fill/w_800,h_480,q_80,strp/or_as_battle_background_1b_by_phoenixoflight92_d874gjl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDgwIiwicGF0aCI6IlwvZlwvMmZiMjgyMWEtMTQwNi00YTFkLTliMDQtNjY2OGYyNzhlOTQ0XC9kODc0Z2psLTU5ZTc5MDgzLWZlYzUtNDIzNC04ODc5LTJhYThhZmQ3ZjlmNC5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.NS-iTazmNwqqoU7C3flPY_Cmhb-7e4zP0vURfSoBQ44')`;
        pokePic.style.width = "16vw";
        pokeName = response.data.name;
        sprite = response.data.sprites.front_default;
        pokePic.style.backgroundImage = `url('${sprite}')`;
        appearMsg.textContent = `${pokeName} has appeared`;
        searchBtn.textContent = "run away";
        choiceBtns.style.display = "inline";
      }, 1500);
    });
};
document.getElementById("storageBtn").addEventListener("click", viewStorage);
function viewStorage() {
  if (pokeStorage.style.display == "none") {
    pokeStorage.style.display = "flex";
  } else {
    pokeStorage.style.display = "none";
  }
}
document.getElementById("catchBtn").addEventListener("click", catchPokemon);
function catchPokemon() {
  if (appearMsg.textContent.endsWith("appeared")) {
    screen.style.backgroundImage = `url('https://media2.giphy.com/media/AE6BTS3QZ5OdUI9zxT/200w.webp?cid=ecf05e47psxmi9btf424ctvvcnreoh1zby1z0fw1qe1mspol&rid=200w.webp&ct=g')`;
    textBox.style.visibility = "hidden";
    pokePic.style.backgroundImage = "none";
    setTimeout(() => {
      textBox.style.visibility = "visible";
      screen.style.backgroundImage = "none";
      pokePic.style.backgroundImage = `url('https://www.freepnglogos.com/uploads/pokeball-png/pokeball-alexa-style-blog-pokemon-inspired-charmander-daily-8.png')`;
    }, 700);
    searchBtn.textContent = "Find Pokemon";
    let newPoke = document.createElement("h3");
    newPoke.textContent = pokeName;
    pokeStorage.appendChild(newPoke);
    appearMsg.textContent = `${pokeName} has been caught!`;
    let catchXp = Math.floor(Math.random() * 50);
    playerXp += catchXp;
    setTimeout(() => {
      appearMsg.textContent = `you have earned ${catchXp} xp`;
    }, 1800);
    for (let i = 0; i < levels.length; i++) {
      if (playerXp < levels[i]) {
        lvl.textContent = `Player lvl: ${i - 1}`;
        nextLvl.textContent = `XP to next lvl: ${levels[i] - playerXp}`;
        return;
      }
    }
  }
}
document.getElementById("fightBtn").addEventListener("click", fightPokemon);
function fightPokemon() {
  if (appearMsg.textContent.endsWith("appeared")) {
    screen.style.backgroundImage = `url('https://thumbs.gfycat.com/AridArtisticBassethound.webp')`;
    textBox.style.visibility = "hidden";
    pokePic.style.backgroundImage = "none";
    pokePic.style.width = "25vw";
    setTimeout(() => {
      textBox.style.visibility = "visible";
      screen.style.backgroundImage = "none";
      pokePic.style.backgroundImage = `url('${sprite}')`;
      appearMsg.textContent = `${pokeName} has been defeated!`;
      setTimeout(() => {
        appearMsg.textContent = `you have earned ${battleXp} xp`;
        pokePic.style.backgroundImage = `url('https://www.seekpng.com/png/detail/10-100282_pogchamp-png-pokemon-trainer-red.png')`;
      }, 1000);
      let battleXp = Math.floor(Math.random() * 100 + 50);
      playerXp += battleXp;

      for (let i = 0; i < levels.length; i++) {
        if (playerXp < levels[i]) {
          lvl.textContent = `Player lvl: ${i - 1}`;
          nextLvl.textContent = `XP to next lvl: ${levels[i] - playerXp}`;
          return;
        }
      }
    }, 6200);
  }
  searchBtn.textContent = "Find Pokemon";
  pokePic.style.width = "16vw";
}
