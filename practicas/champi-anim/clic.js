var tiempo;
var puntos = 0;
var iActual;
var salida;
var imagenes;
var ranD;
var delay;

function iniciar() {
  if (!tiempo) tiempo = setInterval(moverImg, 1000);
  salida = document.getElementById("pts");
  imagenes = document.getElementsByClassName("imagen");
  //imagenes[0].src = "champi.gif";

  iActual = imagenes[0];


}


function leerClic(i) {


  if (i == iActual) {

    if (ranD == 0) {
      puntos++;
      salida.value = puntos;
    } else if (ranD == 1) {
      puntos--;
      salida.value = puntos;
    } else if (ranD == 2) {
      delay = setInterval(moverImg, 150);
      setTimeout(() => { retraso() }, 3000);
    }
  }
}


function moverImg(e) {
  iActual.src = "vacio.png";
  var sig = Math.floor(Math.random() * 6);
  ranD = Math.floor(Math.random() * 3);
  iActual = imagenes[sig];

  console.log(ranD);
  if (ranD == 0) {
    iActual.src = "champi.gif";
  } else if (ranD == 1) {
    iActual.src = "venenoso.gif";
  } else {
    iActual.src = "alucin.gif";
  }


}

function detener() {
  clearInterval(tiempo);
}

function retraso() {
  clearInterval(delay);
}
