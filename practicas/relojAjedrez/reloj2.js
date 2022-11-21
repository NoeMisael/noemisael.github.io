
var temp = 0;
var min = 0;
var sec = 0;
var min1 = 0;
var sec1 = 60;
var min2 = 0;
var sec2 = 0;
var tiempo1;
var tiempo2;
var oculto = document.getElementById("setValue");
var cambio = 1;

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
       min=0;
    } else {
      min=min-1;
       
    }
    ocultar();
    tiempo1 = setInterval(delay1, 1000);
}
function delay1() {
    if (sec > 0) {
        sec--;
        if (sec < 10) {
            document.getElementById('player1').value = parseInt(min) +" : "+ parseInt(sec);

        } else {
            document.getElementById('player1').value = parseInt(min) + " : " + parseInt(sec);

        }
    }
    if (sec == 0) {
        if (min == 0) {
            console.log("terminó");
            clearInterval(tiempo1);
            document.getElementById('player1').value = parseInt(min) + " : 00";
        } else {
            sec = 59;
            min--;
            document.getElementById('player1').value = parseInt(min) + " : " + parseInt(sec);
        }
    }

}

/*function delay2() {
    if (sec2 > 0) {
        sec2--;
        if (sec2 < 10) {
            document.getElementById('player2').value = parseInt(min2) + " : 0" + parseInt(sec2);

        } else {
            document.getElementById('player2').value = parseInt(min2) + " : " + parseInt(sec2);

        }
    }
    if (sec2 == 0) {
        if (min2 == 0) {
            console.log("terminó");
            clearInterval(tiempo2);
            document.getElementById('player2').value = parseInt(min2) + " : 00";


        } else {
            sec2 = 59;
            min2--;
            document.getElementById('player2').value = parseInt(min2) + " : " + parseInt(sec2);
        }
    }

}

function change() {
    if (cambio == 1) {
        cambio = 2;
        clearInterval(tiempo1);
        tiempo2 = setInterval(delay2, 1000);
    } else if (cambio == 2) {
        cambio = 1;
        clearInterval(tiempo2);
        tiempo1 = setInterval(delay1, 1000);
    }


}*/
