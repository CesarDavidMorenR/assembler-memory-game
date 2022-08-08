let moves = 0;
let showmoves = document.getElementById("moves");
let hits = 0;
let showhits = document.getElementById("hits");
let time = false;
let timer = 0;
let timeInitial = 0;
let showtime = document.getElementById("tiempo");

let sound = new Audio("./sound/click boton.wav");
let soundfail = new Audio("./sound/sound (fallo.wav");
let soundgood = new Audio("./sound/sound acierto.wav");
let winAudio = new Audio("./sound/sound ganar.wav");
let loseAudio = new Audio("./sound/sound perder.wav");

//generar numeros aleatorios//
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numbers = numbers.sort(() => {
  return Math.random() - 0.5;
});
console.log(numbers);

//funcion del cambio//
let cardsturn = 0;
let card1 = null;
let card2 = null;
let firstresult = null;
let secondresult = null;
let timestop = null;

//contar tiempo
function counttime() {
  timestop = setInterval(() => {
    timer++;
    showtime.innerHTML = `Time: ${timer} seconds`;

    if (timer === 60) {
      clearInterval(timestop);
      lockCard();
      loseAudio.play();
    }
  }, 1000);
}

/* Oculta imagenes , funcion que se llama en el listener LINEA 186,187,188  */

function hideCards() {
  for (let i = 0; i <= 15; i++) {
    let tarjetabloqueada = document.getElementById(i);
    tarjetabloqueada.innerHTML = "";
  }
}

function lockCard() {
  for (let i = 0; i <= 15; i++) {
    let tarjetabloqueada = document.getElementById(i);
    tarjetabloqueada.innerHTML = `<img src="./assets/${numbers[i]}.jpg" alt="">`;
    tarjetabloqueada.disabled = false;
  }
}

let bodyCard = document.querySelector(".card-dad");
if (hits === 8) {
  bodyCard.display = "none";
}
let bodyfinish = document.querySelector(".win-dad");
bodyfinish.classList.remove("win-dad");

function turn(id) {
  if (time === false) {
    counttime();
    time = true;
  }
  cardsturn++;
  console.log(cardsturn);

  if (cardsturn === 1) {
    card1 = document.getElementById(id);
    firstresult = numbers[id];
    card1.innerHTML = `<img src="./assets/${firstresult}.jpg" alt="">`;
    sound.play();

    //deshabilitar el primerboton//
    card1.disabled = true;
  } else if (cardsturn === 2) {
    //mostras segund numero//
    card2 = document.getElementById(id);
    secondresult = numbers[id];
    card2.innerHTML = `<img src="./assets/${secondresult}.jpg" alt="">`;

    //deshabilitar el segundo//
    card2.disabled = true;

    //movimientos//
    moves++;
    showmoves.innerHTML = `Moves: ${moves}`; //estp//

    if (firstresult === secondresult) {
      cardsturn = 0;

      //aciertos//
      hits++;
      showhits.innerHTML = `Hits: ${hits}`; //estp//
      soundgood.play();

      if (hits === 8) {
        winAudio.play();
        clearInterval(timestop);
        showhits.innerHTML = `Hits: ${hits} hits`;
        showtime.innerHTML = `Your time: ${timeInitial - timer} seconds`;
        showmoves.innerHTML = `Moves: ${moves} <Equipo Turing😁>`;
      }
    } else {
      soundfail.play();
      //mostrar valores de forma mometanea//
      setTimeout(() => {
        card1.innerHTML = " ";
        card2.innerHTML = " ";
        card1.disabled = false;
        card2.disabled = false;
        cardsturn = 0;
      }, 800);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let primerName = document.getElementById("name");
  let nameScore = document.getElementById("name-score");
  let btnStart = document.getElementById("btn-start");

  btnStart.addEventListener("click", (e) => {
    // let mainBody = document.querySelector(".main-dad");
    let name = document.getElementById("nombre-user").value;

    localStorage.setItem("players", name);
    localStorage.setItem("scoring", name);
    // window.location.reload();
    // mainBody.style.display = "none";
    let bodyStart = document.querySelector(".main-dad");
    bodyStart.style.display = "none";
    let bodyCard = document.querySelector(".card-dad");
    bodyCard.classList.remove("card-dad");
    e.preventDefault();
    let namePlayer = localStorage.getItem("players");

    primerName.textContent = namePlayer;
    nameScore.textContent = namePlayer;
    let actualPlayer = document.getElementById("actual-player-info");
    actualPlayer.textContent = `${namePlayer} is currently playing`;

    /* Muestra las imagenes   */

    function lockCarad() {
      for (let i = 0; i <= 15; i++) {
        let tarjetabloqueada = document.getElementById(i);
        tarjetabloqueada.innerHTML = `<img src="./assets/${numbers[i]}.jpg" alt="">`;
      }
    }

    lockCarad();

    /* Oculta imagenes tras 3 segundos  */

    setTimeout(() => {
      hideCards();
    }, 3000);
  });
});

//finish
