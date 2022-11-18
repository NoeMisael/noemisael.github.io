var numeros = new Array();
var prom;
var suma;
var cont = 0;
var minimo = 0;
var maximo = 0;
var s = 0;
var m = s;
var a;
var mitad = 0;
var media = 0;

function insert() {
    if (document.getElementById('numeros').value == "") {
        console.log("no puede imprimir");
    } else {
        numeros.push(document.getElementById('numeros').value);
        cont++;

        suma = 0;
        for (var i = 0; i < numeros.length; i = i + 1) {

            suma = suma + parseInt(numeros[i]);
        }
        suma = parseInt(suma);

    }
    document.getElementById('numArray').value = numeros;
    document.getElementById('suma').value = suma;
}

function promedio() {

    prom = suma / cont;

    console.log(cont);
    document.getElementById('resultProm').value = prom;
}
//min-max
function calculos() {
    if (numeros.length == 0) {
        document.getElementById('maximo').value = "empty array";
        document.getElementById('minimo').value = "empty array";
    } else {

        maximo = Math.max.apply(null, numeros);
        minimo = Math.min.apply(null, numeros);
        maximo = parseInt(maximo);
        minimo = parseInt(minimo);
        document.getElementById('maximo').value = maximo;
        document.getElementById('minimo').value = minimo;


    }
}

function moda() {
    if (numeros.length == 0) {
        document.getElementById('moda').value = "Empty Array";

    } else {

        for (var i = 0; i < numeros.length; i++) {
            s = 0;
            for (var j = 0; j < numeros.length; j++) {
                if (numeros[i] == numeros[j] && i != j) {
                    s = s + 1;
                }

            }
            if (s >= m) {
                m = s;
                a = i;
            }
        }

    }
    document.getElementById('moda').value = numeros[a];

}

function mediana() {
    if (numeros.length == 0) {
        document.getElementById('mediana').value = "Empty Array";

    }
else{
    numeros.sort(function (a, b) { return a - b });
    document.getElementById('numArray').value = numeros;
    if (numeros.length % 2 == 0) {
        media = numeros.length / 2;
        mitad = parseFloat(numeros[media - 1]) + parseFloat(numeros[media]);
        mitad = mitad / 2;
        document.getElementById('mediana').value = mitad;


    } else {
        media = numeros.length / 2;
        media = media - 0.5;
        console.log(numeros[media]);
        document.getElementById('mediana').value = numeros[media];
    }}
}
