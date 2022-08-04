//variables
let tarjetas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 0;
let tiempoRegresivoId = null;
//documento HTML
let mostrarMovimientos = document.getElementById('movimientos');
//mostrar tiempo
let mostrarTiempo = document.getElementById('tiempo')
//documento HTML aciertos
let mostrarAciertos = document.getElementById('aciertos')

let correctAudio = new Audio('./Sound/correct.wav');
let loseAudio = new Audio('./Sound/lose.wav');




//numero aleatorio
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];


numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

//funciones
function contarTiempo(){
tiempoRegresivoId = setInterval(()=>{
    timer++;
    mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
 if(timer ==0){
    clearInterval(tiempoRegresivoId);
    bloquearTarjetas();
 }
},1000);
}

function bloquearTarjetas(){
    for(let i = 0; i<=15; i++){
    let tarjetaBloqueada = document.getElementById(i);
    tarjetaBloqueada.innerHTML = `numeros[i];`
    tarjetaBloqueada.disabled = true;
    }
}

//PRINCIPAL
function girar(id){

if (temporizador == false){
    contarTiempo();
    temporizador = true;
}

 tarjetas++;
 console.log(tarjetas)


 if (tarjetas == 1){
 tarjeta1 = document.getElementById(id);
 primerResultado = numeros[id]
 tarjeta1.innerHTML = `<img src="./assets/${primerResultado}.jpg" alt="">`;
correctAudio.play();
//que se quede en el mostrador
 tarjeta1.disabled = true;
//segundo numero
 }else if(tarjetas ==2){
 tarjeta2 = document.getElementById(id);
 segundoResultado = numeros[id];
 tarjeta2.innerHTML =`<img src="./assets/${segundoResultado}.jpg" alt="">`;
//que se quede en el mostrador
tarjeta2.disabled = true;

//movimiento
movimientos++;
mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
if(primerResultado == segundoResultado){
tarjetas= 0;

//Aumentar aciertos
aciertos++
mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

if(aciertos == 8){
 mostrarAciertos.innerHTML = `Aciertos: ${aciertos}😁`
 mostrarMovimientos.innerHTML =`Movimientos: ${movimientos} Equipo Turing😘`
}

}else{
//mostrar mas
setTimeout(()=>{
    tarjeta1.innerHTML = '';
    tarjeta2.innerHTML = '';
    tarjeta1.disabled = false;
    tarjeta2.disabled = false;
    tarjetas = 0;
},800);

  }
 } 
}
