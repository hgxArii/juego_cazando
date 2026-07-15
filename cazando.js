let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

function graficarGato(){
    graficarRectangulo(
        gatoX,
        gatoY,
        ANCHO_GATO,
        ALTO_GATO,
        "blue"
    );
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
function iniciarJuego(){

    gatoX=(500-ANCHO_GATO)/2;
    gatoY=(500-ALTO_GATO)/2;
    comidaX=500-ANCHO_COMIDA;
    comidaY=500-ALTO_COMIDA;
    graficarGato();
    graficarComida();

}
let gatoX=0;
let gatoY=0;
let comidaX=0;
let comidaY=0;
const ANCHO_GATO=50;
const ALTO_GATO=50;
const ANCHO_COMIDA=30;
const ALTO_COMIDA=30;
function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,ancho,alto);
}