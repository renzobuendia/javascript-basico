//if
var jugador = "piedra";
var maquina = "tijera";

if(jugador == "piedra" && maquina == "tijera"){
    console.log("Ganaste!");
} else if (jugador == "tijera" && maquina == "papel") {
    console.log("Ganaste!");
} else if (jugador == "papel" && maquina == "piedra") {
    console.log("Ganaste!");
} else if (jugador === maquina) {
    
} else {
    console.log("Perdiste");
}

//switch
var jugador = "piedra";
var maquina = "tijera";

switch (true) {
    case (jugador == "piedra" && maquina == "tijera"):
        console.log("Ganaste!");
        break;
    case (jugador == "tijera" && maquina == "papel"):
        console.log("Ganaste!");
        break;
    case (jugador == "papel" && maquina == "piedra"):
        console.log("Ganaste!");
        break;
    case (jugador === maquina):
        console.log("Empate");
        break;

    default:
        break;
}