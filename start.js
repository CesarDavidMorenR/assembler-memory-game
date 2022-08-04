/* David - Begin */

let primerName = document.getElementById("name");

let time = document.getElementById("time");
let nameScore = document.getElementById("name-score");
let score = document.getElementById("score");

// let myPlayers = {
//   totalPlayers: 0,
//   players: [],
// }

if (localStorage.getItem("players") !== null) {
  primerName.textContent = localStorage.getItem("players");
  nameScore.textContent = localStorage.getItem("players");
} else {
  primerName.textContent = "-----";
}

let btnStart = document.getElementById("btn-start");

btnStart.addEventListener("click", () => {
  // let mainBody = document.querySelector(".main-dad");
  let name = document.getElementById("nombre-user").value;

  localStorage.setItem("players", name);
  window.location.reload();
  // mainBody.style.display = "none";
});

/* David -End */
