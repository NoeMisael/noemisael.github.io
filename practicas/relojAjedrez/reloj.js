
var temp = 0;
var min = 0;
var sec = 60;
var min1 = 0;
var sec1 = 60;
var tiempo;
var tiempo1;
var cambio = true;
var oculto = document.getElementById("setValue");


function set() {
    if (document.getElementById('set').value == 0 || document.getElementById('set') == "") {
        console.log("inserta un valor valido");
    } else {


        temp = document.getElementById('set').value;
        min = parseInt(temp);
        min1 = parseInt(temp)
        document.getElementById('player1').value = min + " : 00";
        document.getElementById('player2').value = min1 + " : 00";

        start();
    }

}


function ocultar() {
    if (oculto.style.display === "none") {
        oculto.style.display = "block";
    } else {

        oculto.style.display = "none";
    }
}

function start() {
    if (min == 1) {
        min = 0;
        min1 = 0;
    } else {
        min = min - 1;
        min1 = min1 - 1;
    }
    ocultar();

    tiempo = setInterval(delay, 100);
}




function delay() {
    if (sec > 0) {
        sec--;
        if (sec < 10) {
            document.getElementById('player1').value = parseInt(min) + " : 0" + parseInt(sec);

        } else {
            document.getElementById('player1').value = parseInt(min) + " : " + parseInt(sec);

        }
    }
    if (sec == 0) {
        if (min == 0) {
            clearInterval(tiempo);
            document.getElementById('ganador').value = "Ganador: Jugador 2";
            document.getElementById('player1').value = parseInt(min) + " : 00";
            ocultar();
            setTimeout(reset, 2000);

        } else {
            sec = 59;
            min--;
            document.getElementById('player1').value = parseInt(min) + " : " + parseInt(sec);
        }
    }

}

function delay1() {
    if (sec1 > 0) {
        sec1--;
        if (sec1 < 10) {
            document.getElementById('player2').value = parseInt(min1) + " : 0" + parseInt(sec1);

        } else {
            document.getElementById('player2').value = parseInt(min1) + " : " + parseInt(sec1);

        }
    }
    if (sec1 == 0) {
        if (min1 == 0) {
            clearInterval(tiempo1);
            document.getElementById('ganador').value = "Ganador: Jugador 1";
            document.getElementById('player1').value = parseInt(min1) + " : 00";
            ocultar();
            setTimeout(reset, 2000);
        } else {
            sec1 = 59;
            min1--;
            document.getElementById('player1').value = parseInt(min1) + " : " + parseInt(sec1);
        }
    }

}


function change() {
    if (cambio == true) {
        clearInterval(tiempo);
        tiempo1 = setInterval(delay1, 100);
        cambio = false;


    } else if (cambio == false) {
        clearInterval(tiempo1);
        tiempo = setInterval(delay, 100);
        cambio = true;
    }
}

function reset() {
    temp = 0;
    min = 0;
    sec = 60;
    min1 = 0;
    sec1 = 60;
    cambio = true;
    document.getElementById('ganador').value = "";
}