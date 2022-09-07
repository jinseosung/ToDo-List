const logOutBtn = document.querySelector(".btn__log-out");

function onLogOut() {
  localStorage.clear();
  location.reload();
}

logOutBtn.addEventListener("click", onLogOut);
