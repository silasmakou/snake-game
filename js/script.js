let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o rectangulo onde vai ocorrer o jogo
}

criarBG();