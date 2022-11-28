<?php

$nom = $_GET['nombre'];
$edad = $_GET['edad'];


if ($edad < 18) {

    echo "aun eres JOVEN $nom ya que tu edad es: $edad ";
} else if ($edad < 50) {
    echo "ya eres un ADULTO $nom ya que tu edad es: $edad";

} else {
    echo "ya estas algo MAYOR $nom ya que tu edad es : $edad";
}

?>