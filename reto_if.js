var jugador = "piedra";
var maquina = "tijera";

if(jugador == "piedra" && maquina == "tijera"){
    console.log("Ganaste!");
} else if (jugador == "tijera" && maquina == "papel") {
    console.log("Ganaste!");
} else if (jugador == "papel" && maquina == "piedra") {
    console.log("Ganaste!");
} else if (jugador === maquina) {
    console.log("Empate");
} else {
    console.log("Perdiste");
}