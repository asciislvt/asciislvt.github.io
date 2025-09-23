const nameElements = document.getElementsByClassName("name");
const motdElement = document.getElementById("motd");

const sillyNames = [
  "Squandon",
  "Blandon",
  "Fandon",
  "Crandon",
  "Brandolini",
  "Brand-dong",
  "Brand On!",
  "Stoopid",
];

const motds = [
  "Pretty cool, man.",
  "Go ahead, don't be scared...",
  "Can you click something?",
  "I ain't got all day...",
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
  motdElement.innerHTML = getRandomMotd();
}

function getRandomMotd() {
  return motds[Math.floor(Math.random() * motds.length)];
}

function getRandomName() {
  return sillyNames[Math.floor(Math.random() * sillyNames.length)];
}
