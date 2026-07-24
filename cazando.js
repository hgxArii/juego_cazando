let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
let gatoX=0;
let gatoY=0;
let comidaX=0;
let comidaY=0;
let puntos = 0;
const ANCHO_GATO=50;
const ALTO_GATO=50;
const ANCHO_COMIDA=30;
const ALTO_COMIDA=30;

function graficarGato(){
    graficarRectangulo(
        gatoX,
        gatoY,
        ANCHO_GATO,
        ALTO_GATO,
        "blue"
    );
}
function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function moverIzquierda(){

    gatoX -= 10;

    if(gatoX<0){
        gatoX=0;
    }

    limpiarCanvas();

    graficarGato();
    graficarComida();
    detectarColision();

}
function moverDerecha(){

    gatoX += 10;

    if(gatoX > canvas.width - ANCHO_GATO){
        gatoX = canvas.width - ANCHO_GATO;
    }

    limpiarCanvas();

    graficarGato();
    graficarComida();
    detectarColision();

}
function moverArriba(){

    gatoY -= 10;

    if(gatoY < 0){
        gatoY = 0;
    }

    limpiarCanvas();

    graficarGato();
    graficarComida();
    detectarColision();

}
function moverAbajo(){

    gatoY += 10;

    if(gatoY > canvas.height - ALTO_GATO){
        gatoY = canvas.height - ALTO_GATO;
    }

    limpiarCanvas();

    graficarGato();
    graficarComida();
    detectarColision();

}
function detectarColision(){

    if(
        gatoX < comidaX + ANCHO_COMIDA &&
        gatoX + ANCHO_GATO > comidaX &&
        gatoY < comidaY + ALTO_COMIDA &&
        gatoY + ALTO_GATO > comidaY
    ){

        puntos++;

        document.getElementById("puntos").textContent = puntos;

        generarComida();

        limpiarCanvas();
        graficarGato();
        graficarComida();

    }

}
function graficarComida(){
    graficarRectangulo(
        comidaX,
        comidaY,
        ANCHO_COMIDA,
        ALTO_COMIDA,
        "green"
    );
}
function generarComida(){

    comidaX = Math.floor(Math.random() * (canvas.width - ANCHO_COMIDA));
    comidaY = Math.floor(Math.random() * (canvas.height - ALTO_COMIDA));

}
function iniciarJuego(){
    gatoX=(500-ANCHO_GATO)/2; 
    gatoY=(500-ALTO_GATO)/2;
    generarComida();
    graficarGato();
    graficarComida(); 
}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,ancho,alto);
}