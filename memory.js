let moves = 0;
let showmoves = document.getElementById("moves")
let hits = 0;
let showhits = document.getElementById("hits");
let time = false;
let timer = 30;
let timeInitial = 30;
let showtime = document.getElementById("tiempo")

let sound = new Audio('./sound/click boton.wav');
let soundfail = new Audio('./sound/(fallo.wav');
let soundgood = new Audio('./sound/acierto.wav');
let winAudio = new Audio('./sound/ganar.wav');
let loseAudio = new Audio('./sound/perder.wav');



//generar numeros aleatorios//
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numbers = numbers.sort(() => { return Math.random() - 0.5 });
console.log(numbers);

//funcion del cambio//
let cardsturn = 0;
let card1 = null;
let card2 = null;
let firstresult = null;
let secondresult = null;
let timestop = null;

//contar tiempo
function counttime(){
    timestop = setInterval(()=>{
        timer--;
        showtime.innerHTML = `Time: ${timer} seconds`;
        if(timer === 0){
        clearInterval(timestop);
        lockCard();
        loseAudio.play();
        }
    },800);
}
function lockCard(){
for(let i = 0; i<=15; i++){
    let tarjetabloqueada = document.getElementById(i);
    tarjetabloqueada.innerHTML = numbers[i];
    tarjetabloqueada.disabled = true;
}
}

function turn(id) {

    if(time === false){
        counttime();
        time = true;
    }
    cardsturn++;
    console.log(cardsturn);

    if (cardsturn === 1) { 
        card1 = document.getElementById(id);
        firstresult = numbers[id];
        card1.innerHTML = firstresult; //cambiar aki//
        sound.play();

        //deshabilitar el primerboton//
        card1.disabled = true;
    } else if (cardsturn === 2) {

        //mostras segund numero//
        card2 = document.getElementById(id);
        secondresult = numbers[id];
        card2.innerHTML = secondresult;

        //deshabilitar el segundo//
        card2.disabled = true;

        //movimientos//aun no
        moves++;
        showmoves.innerHTML = `Moves: ${moves}`;   //estp//

        if (firstresult === secondresult) {
            cardsturn = 0;

            //aciertos//
            hits++;
            showhits.innerHTML = `Hits: ${hits}`;//estp//
            soundgood.play();

            if (hits === 8) {
                winAudio.play();
                clearInterval(timestop);
                showhits.innerHTML = `Hits: ${hits} good`;
                showtime.innerHTML = `blabla: ${timeInitial - timer} segundos`;
                showmoves.innerHTML = `Moves: ${moves} go`;
            }


        } else {
            soundfail.play();
            //mostrar valores de forma mometanea//
            setTimeout(() => {
                card1.innerHTML = ' ';
                card2.innerHTML = ' ';
                card1.disabled = false;
                card2.disabled = false;
                cardsturn = 0;
            }, 1000);
        }

    }

}
