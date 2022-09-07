const darkModeBtn = document.querySelector(".btn__dark-mode");
const darkModeIcon = document.querySelector(".btn__dark-mode i");
const boxs = document.querySelector(".boxs");
const greetingBox = document.querySelector(".box1");
const greetingInput = document.querySelector(".box1__greeting");
const videoBox = document.querySelector(".box1__video");
const listBox = document.querySelector(".box2");
const clockBox = document.querySelector(".box3__inner");
const quoteBox = document.querySelector(".box3__quote");
const darkModeBtns = document.querySelectorAll(".box1__btns button");

function handleDarkmode() {
  document.body.classList.toggle("dark-mode");
  boxs.classList.toggle("dark-mode");
  greetingBox.classList.toggle("dark-mode");
  greetingInput.classList.toggle("dark-mode");
  videoBox.classList.toggle("dark-mode");
  listBox.classList.toggle("dark-mode");
  clockBox.classList.toggle("dark-mode");
  quoteBox.classList.toggle("dark-mode");
  darkModeBtns.forEach((btn) => {
    btn.classList.toggle("dark-mode");
  });
  darkModeIcon.classList.toggle("fa-regular");
  darkModeIcon.classList.toggle("fa-solid");
}

darkModeBtn.addEventListener("click", handleDarkmode);
