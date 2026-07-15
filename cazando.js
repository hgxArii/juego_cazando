let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

function graficarGato(){
    ctx.fillStyle="blue";
    ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTO_GATO);
}
function graficarComida(){
    ctx.fillStyle="green";
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
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
