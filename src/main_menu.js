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
  "pretty cool, man.",
  "i ain't got all day...",
  "a nice little portfolio.",
  "watching breaking bad right now.",
  "go ahead, don't be scared...",
  "can you click something?",
];

randomizeNames();
randomizeMotd();

function randomizeNames() {
  for (let i = 0; i < nameElements.length; i++) {
    if (i == 0) {
      continue;
    }
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
