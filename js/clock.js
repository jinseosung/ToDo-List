const clock = document.querySelector("h2#clock");
const dateNow = document.querySelector("h3#date");

function getColck() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDate() {
  const days = ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"];
  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Avr",
    "Mai",
    "Jun",
    "Jul",
    "Août",
    "Sep",
    "Oct",
    "Nov",
    "Déc",
  ];
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = months[newDate.getMonth()];
  const date = newDate.getDate();
  const day = days[newDate.getDay()];
  dateNow.innerText = `${day} ${date} ${month} ${year}`;
}

getDate();
getColck();
setInterval(getColck, 1000);
