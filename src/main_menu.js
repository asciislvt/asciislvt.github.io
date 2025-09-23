import typewriter from "./modules/typewriter.js"

const nameElements = document.getElementsByClassName("name");
const motdElement = document.getElementById("motd");

const sillyNames = [
  "squandon",
  "squand-on",
  "squand-off",
  "blandon",
  "fandon",
  "crandolini",
  "brandolini",
  "brand-dong",
  "brand-on!",
  "brand-off",
  "stoopid",
  "chill guy",
];

const motds = [
  "*pees self*",
  "which came first, ranch or cool ranch?",
  "pretty cool, man.",
  "i ain't got all day...",
  "a nice little portfolio.",
  "watching breaking bad right now.",
  "go ahead, don't be scared...",
  "hey dude, can you click something already?",
  "(cc) 2025 asciisvt"
];

randomizeNames();
randomizeMotd();

function randomizeNames() {
  for (let i = 0; i < nameElements.length; i++) {
    nameElements[i].innerHTML = getRandomName();
  }
}

function randomizeMotd() {
  typewriter(motdElement, getRandomMotd(), 20);
}

function getRandomMotd() {
  return motds[Math.floor(Math.random() * motds.length)];
}

function getRandomName() {
  return sillyNames[Math.floor(Math.random() * sillyNames.length)];
}
