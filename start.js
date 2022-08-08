

let timestop = null;

if (localStorage.getItem("players") !== null) {
  let timer = 778;

  timestop = setInterval(() => {
    timer--;
    time.textContent = timer;
    if (timer == 0) {
      clearInterval(timestop);
    }
  }, 1000);

  score.textContent = "0";
} else {
  primerName.textContent = "------";
  nameScore.textContent = "------";
  time.textContent = "777 seconds";
}

let btnStart = document.getElementById("btn-start");

btnStart.addEventListener("click", (e) => {
  // let mainBody = document.querySelector(".main-dad");
  let name = document.getElementById("nombre-user").value;

  localStorage.setItem("players", name);
  localStorage.setItem("scoring", name);
  // window.location.reload();
  // mainBody.style.display = "none";
  let bodyStart = document.querySelector(".main-dad");
  // bodyStart.style.display = "none";
  let bodyCard = document.querySelector(".card-dad");
  // bodyCard.classList.remove("card-dad");
  e.preventDefault();

  let namePlayer = localStorage.getItem("players");

  primerName.textContent = namePlayer;
  nameScore.textContent = namePlayer;
  let actualPlayer = document.getElementById("actual-player-info");
  actualPlayer.textContent = `${namePlayer} is currently playing`;
});

/* David -End */
