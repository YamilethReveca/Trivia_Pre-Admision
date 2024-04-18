const respuesta_correcta_1 = "Austria";
const respuesta_correcta_2 = "1945";
const respuesta_correcta_3 = "Thomas-Edison";
const respuesta_correcta_1_2 = "Nopal";
const respuesta_correcta_2_2 = "Pollo";
const respuesta_correcta_3_2_2 = "Chile";
let temporizador;
let identificadorTemporizador;
let puntaje = 0;
let acierto = 0;

function validar() {

  let nombre = document.getElementById("nombreUsuario").value;

  if (nombre != "") {
    document.getElementById("ver-nombre-usuario").innerHTML = ("Bienvenido al juego " + nombre);

  } else {

    alert("No digitó su nombre")
  }
  document.getElementById("contenedor-2").style.display = "block";
  document.getElementById("contenedor-1").style.display = "none";

}

function cultura() {

  temporizador = 61;

  identificadorTemporizador = setInterval(function () {
    --temporizador;
    document.getElementById("tiempo1").innerHTML = temporizador;


    if (temporizador <= 0) {
      clearInterval(identificadorTemporizador);
    }

  }, 1000);

  document.getElementById("culturaGeneral").style.display = "block"
  document.getElementById("cultura_general_1").style.display = "block";
  document.getElementById("contenedor-2").style.display = "none";

}

function gastronomia() {

  temporizador = 61;

  identificadorTemporizador = setInterval(function () {
    --temporizador;
    document.getElementById("tiempo1_2").innerHTML = temporizador;

    if (temporizador <= 0) {
      clearInterval(identificadorTemporizador);
    }


  }, 1000);


  document.getElementById("gastronomia").style.display = "block";
  document.getElementById("gastronomia-1").style.display = "block";
  document.getElementById("contenedor-2").style.display = "none";

}


function validar_respuesta_1() {

  clearInterval(identificadorTemporizador);
  temporizador = 61;


  let respuesta_seleccionada1 = document.querySelector("input[name=pais]:checked").value;

  let guardando = document.querySelector("#ver1");

  if (respuesta_seleccionada1 === respuesta_correcta_1) {

    guardando.innerHTML = ("Correcto!!!, la respuesta es: " + respuesta_seleccionada1);
    document.getElementById("ver1").style.color = "green";

    puntaje += 100;
    document.getElementById("puntos").innerHTML = puntaje + " " + "puntos";

    acierto += 1;
    document.getElementById("acierto-1").innerHTML = acierto + "/3";

  } else {

    guardando.innerHTML = ("Incorrecto, la respuesta correcta es: " + respuesta_correcta_1)
    document.getElementById("ver1").style.color = "red";



  }

}

function siguiente_1() {


  document.getElementById("cultura_general_2").style.display = "block";
  document.getElementById("cultura_general_1").style.display = "none";

  identificadorTemporizador = setInterval(function () {
    --temporizador;
    document.getElementById("tiempo2").innerHTML = temporizador;
    if (temporizador === 0) {
      clearInterval(identificadorTemporizador);
    }


  }, 1000);


}

function validar_respuesta_2() {

  clearInterval(identificadorTemporizador);
  temporizador = 61;

  let respuesta_seleccionada2 = document.querySelector("input[name=guerra]:checked").value;

  let guardando = document.querySelector("#ver2");

  if (respuesta_seleccionada2 === respuesta_correcta_2) {
    guardando.innerHTML = ("Correcto!!!, la respuesta es: " + respuesta_seleccionada2);
    document.getElementById("ver2").style.color = "green";

    puntaje += 100;
    document.getElementById("puntos2").innerHTML = puntaje + " " + "puntos";

    acierto += 1;
    document.getElementById("acierto-2").innerHTML = acierto + "/3";

  } else {

    guardando.innerHTML = ("Incorrecto, la respuesta correcta es :" + respuesta_correcta_2);
    document.getElementById("ver2").style.color = "red";



  }

}

function siguiente_2() {

  document.getElementById("cultura_general_3").style.display = "block";
  document.getElementById("cultura_general_2").style.display = "none";

  identificadorTemporizador = setInterval(function () {
    --temporizador;
    document.getElementById("tiempo3").innerHTML = temporizador;
    if (temporizador === 0) {
      clearInterval(identificadorTemporizador);
    }


  }, 1000);


}

function validar_respuesta_3() {

  clearInterval(identificadorTemporizador);

  let respuesta_seleccionada3 = document.querySelector("input[name=invento]:checked").value;

  let guardando = document.querySelector("#ver3");

  if (respuesta_seleccionada3 === respuesta_correcta_3) {
    guardando.innerHTML = ("Correcto!!!, la respuesta es: Thomas Edison");
    document.getElementById("ver3").style.color = "green";

    puntaje += 100;
    document.getElementById("puntos3").innerHTML = puntaje + " " + "puntos";

    acierto += 1;
    document.getElementById("acierto-3").innerHTML = acierto + "/3";


  } else {
    guardando.innerHTML = ("Incorrecto, la respuesta correcta es  : Thomas Edison");
    document.getElementById("ver3").style.color = "red";



  }

}


function siguiente_3() {

  document.getElementById("contenedor-1").style.display = "block";
  document.getElementById("cultura_general_3").style.display = "none";
  document.getElementById("ver-nombre-usuario").style.display = "none";
  document.getElementById("nombreUsuario").value = "";

}

function validar_respuesta_1_2() {


  clearInterval(identificadorTemporizador);
  temporizador = 61;

  let respuesta_seleccionada = document.querySelector("input[name=hojas]:checked").value;

  let guardando = document.querySelector("#ver-1-1");

  if (respuesta_seleccionada === respuesta_correcta_1_2) {
    guardando.innerHTML = ("Correcto!!!, la respuesta es: " + respuesta_seleccionada);
    document.getElementById("ver-1-1").style.color = "green";

    puntaje += 100;
    document.getElementById("puntosgas").innerHTML = puntaje + " " + "puntos";

    acierto += 1;
    document.getElementById("acierto-gastro1").innerHTML = acierto + "/3";

  } else {
    guardando.innerHTML = ("Incorrecto, la respuesta correcta es:" + respuesta_correcta_1_2);
    document.getElementById("ver-1-1").style.color = "red";



  }

}

function siguiente_2_1() {

  document.getElementById("gastronomia-2").style.display = "block";
  document.getElementById("gastronomia-1").style.display = "none";

  identificadorTemporizador = setInterval(function () {
    --temporizador;
    document.getElementById("tiempo2_2").innerHTML = temporizador;

    if (temporizador === 0) {
      clearInterval(identificadorTemporizador);
    }


  }, 1000);

}

function validar_respuesta_2_2() {


  clearInterval(identificadorTemporizador);
  temporizador = 61;

  let respuesta_seleccionada = document.querySelector("input[name=ceviche]:checked").value;

  let guardando = document.querySelector("#ver-1-2");

  if (respuesta_seleccionada === respuesta_correcta_2_2) {
    guardando.innerHTML = ("Correcto!!!, la respuesta es: " + respuesta_seleccionada);
    document.getElementById("ver-1-2").style.color = "green";

    puntaje += 100;
    document.getElementById("puntosgas2").innerHTML = puntaje + " " + "puntos";

    acierto += 1;
    document.getElementById("acierto-gastro2").innerHTML = acierto + "/3";

  } else {
    guardando.innerHTML = ("Incorrecto, la respuesta correcta es: " + respuesta_correcta_2_2);
    document.getElementById("ver-1-2").style.color = "red";



  }

}

function siguiente_2_2() {

  document.getElementById("gastronomia-3").style.display = "block";
  document.getElementById("gastronomia-2").style.display = "none";

  identificadorTemporizador = setInterval(function () {
    --temporizador;
    document.getElementById("tiempo3_2").innerHTML = temporizador;
    if (temporizador === 0) {
      clearInterval(identificadorTemporizador);
    }


  }, 1000);
}

function validar_respuesta_3_2() {

  clearInterval(identificadorTemporizador);
  temporizador = 61;

  let respuesta_seleccionada = document.querySelector("input[name=guiso]:checked").value;

  let guardando = document.querySelector("#ver-1-3");

  if (respuesta_seleccionada === respuesta_correcta_3_2_2) {
    guardando.innerHTML = ("Correcto!!!, la respuesta  es: " + respuesta_seleccionada);
    document.getElementById("ver-1-3").style.color = "green";

    puntaje += 100;
    document.getElementById("puntosgas3").innerHTML = puntaje + " " + "puntos";

    acierto += 1;
    document.getElementById("acierto-gastro3").innerHTML = acierto + "/3";

  } else {
    guardando.innerHTML = ("Incorrecto, la respuesta correcta es: " + respuesta_correcta_3_2_2);
    document.getElementById("ver-1-3").style.color = "red";



  }

}

function siguiente_2_3() {

  document.getElementById("contenedor-1").style.display = "block";
  document.getElementById("gastronomia-3").style.display = "none";
  document.getElementById("ver-nombre-usuario").style.display = "none";

  document.getElementById("nombreUsuario").value = "";
}
