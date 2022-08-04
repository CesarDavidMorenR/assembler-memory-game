/* David - Begin */

let btnStart = document.getElementById("btn-start");

let primerName = document.getElementById("primer-nombre");

// let myPlayers = {
//   totalPlayers: 0,
//   players: [],
// }

if (localStorage.getItem("players") !== null) {
  primerName.textContent = localStorage.getItem("players");
  
} else {
  primerName.textContent = "-----";
}

btnStart.addEventListener("click", () => {
  // let mainBody = document.querySelector(".main-dad");
  let name = document.getElementById("nombre-user").value;

  localStorage.setItem("players", name);
  window.location.reload();
  // mainBody.style.display = "none";
});

/* David -End */
