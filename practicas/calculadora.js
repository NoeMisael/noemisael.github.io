var salida;
var conPunto;
var conResultado;
var operador;
var operando1;
var operando2;
var serie;


function iniciar() {
  document.onkeypress = controlDeEventos;
  salida = document.getElementById("salida");
  resetear();

  var botones = document.getElementsByTagName("input");
  for (var i = 0; i < botones.length; i++)
    if (botones[i].type == "button") botones[i].onclick = controlDeEventos;
}

function resetear() {
  serie = false;
  conPunto = false;
  conResultado = false;
  salida.value = "0";
  operando1 = 0;
  operando2 = 0;
}

function negar() {
  salida.value = parseFloat(salida.value) * -1;
}


function controlDeEventos(e) {
  var valor;

  if (e.type == "click") valor = e.target.value;
  else if (e.type == "keypress") valor = e.key;

  if ('0123456789'.includes(valor)) ponerDigito(valor);
  if ('+-*/^'.includes(valor)) guardarOperador(valor);
  if (valor == ".") ponerPunto();
  if (valor == "=") realizarOperacion();
  if (valor == "Enter") realizarOperacion();
  if ('nN'.includes(valor)) negar();
  if ('cC'.includes(valor)) resetear();
}

function ponerDigito(digito) {
  if (conResultado) {
    salida.value = "";
    conResultado = false;
  }
  if (salida.value == "0") salida.value = "";
  salida.value += digito;
  serie = false;
}

function ponerPunto() {
  if (conResultado) {
    salida.value = "0";
    conResultado = false;
  }
  if (!conPunto) {
    conPunto = true;
    salida.value += ".";
  }
  serie = false;
}

function guardarOperador(op) {
  operador = op;
  operando1 = parseFloat(salida.value);
  salida.value = "";
  conPunto = false;
}

function realizarOperacion() {
  if (!serie) operando2 = parseFloat(salida.value);
  switch (operador) {
    case "+": operando1 += operando2; break;
    case "-": operando1 -= operando2; break;
    case "*": operando1 *= operando2; break;
    case "/": operando1 /= operando2; break;
    case "^": operando1=Math.pow(operando1,operando2); break;
  }

  salida.value = operando1;
    conPunto = false;
    conResultado = true;
    serie = true;
}
