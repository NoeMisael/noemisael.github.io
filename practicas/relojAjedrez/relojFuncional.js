
var temp = 0;
var min = 0;
var sec = 60;
var tiempo;
var oculto = document.getElementById("setValue");

function set() {
    if (document.getElementById('set').value == 0 || document.getElementById('set') == "") {
        console.log("inserta un valor valido");
    } else {


        temp = document.getElementById('set').value;
        min = parseInt(temp);

        document.getElementById('player1').value = min + " : 00";
        document.getElementById('player2').value = min + " : 00";

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
    } else {
        min = min - 1;
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
            console.log("terminó");
            clearInterval(tiempo);
            document.getElementById('player1').value = parseInt(min) + " : 00";


        } else {
            sec = 59;
            min--;
            document.getElementById('player1').value = parseInt(min) + " : " + parseInt(sec);
        }
    }

}


