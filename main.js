// variables de las respuestas correctas

const respuesta_correcta_1 = "Austria";
const respuesta_correcta_2 = "1945";
const respuesta_correcta_3 = "Thomas-Edison";
const respuesta_correcta_1_2 = "Nopal";
const respuesta_correcta_2_2 = "Pollo";
const respuesta_correcta_3_2 = "Chile";
let temporizador;
let identificadorTemporizador;
let puntaje = 0;
let acierto = 0;

let respuesta_seleccionada = "";

// ingrersar al juego index-bienvenida
function ingresar() {
  document.getElementById("ingresar")
  window.location.href = "index-bienvenida.html";

}

// ir a la siguiente vista mostrar las alternativas y mostar el nombre del usuario
function validarNombre() {
  let nombreUsuario = document.getElementById('nombreUsuario').value.trim(); // Obtiene el valor del input y quita espacios

  if (nombreUsuario !== "") {
    localStorage.setItem("nombreUsuario", nombreUsuario); // Guarda el nombre en localStorage
    window.location.href = "index-opciones.html"; // Redirige a la otra vista
  } else {
    alert("Por favor, ingresar su nombre.");
  }
}


document.addEventListener("DOMContentLoaded", function () {
  let nombreGuardado = localStorage.getItem("nombreUsuario"); // Obtiene el nombre guardado

  if (nombreGuardado) {
    // Convierte la primera letra en mayúscula y concatena el resto
    let nombreCapitalizado = nombreGuardado.charAt(0).toUpperCase() + nombreGuardado.slice(1).toLowerCase();

    document.getElementById("ver-nombre-usuario").innerHTML = `Bienvenid@ ${nombreCapitalizado}, elige 1 de nuestra 4 opciones`;
  }
});






// ir según la opción seleccionada
function cultura() {
  temporizador = 61;

  identificadorTemporizador = setInterval(function () {
    --temporizador;
    document.getElementById("tiempo1").innerHTML = temporizador;


    if (temporizador <= 0) {
      clearInterval(identificadorTemporizador);
    }

  }, 1000);



  
    let categoria = document.getElementById('boton-1').dataset.category;
    if (categoria === 'cultura') {
      window.location.href = "index-cultura.html";
    }
  


  let boton1 = document.getElementById('boton-1').value;
  if (boton1 === 'cultura') {
    window.location.href = "index-cultura.html";
  }




  document.getElementById('one').style.display = "block"
  document.getElementById("two").style.display = "none"; // oculyo el contenedor-2

}


function gastronomia() {
  let categoria = document.getElementById('boton-2').dataset.category;
  
  if (categoria === 'gastronomia') {

    window.location.href = "index-gastronomia.html";
  }
}

function programacion() {
  let categoria = document.getElementById('boton-3').dataset.category;  
  
  if (categoria === 'programacion') {

    window.location.href = "index-programacion.html";
  }
}

function conduccion() {
  let categoria = document.getElementById('boton-4').dataset.category;  
  
  if (categoria === 'conduccion') {

    window.location.href = "index-conduccion.html";
  }

}

// obtener el valor de cada pregunta

document.querySelectorAll('.opcion').forEach(opcion => {

  opcion.addEventListener('click', function () {

    respuesta_seleccionada = this.value

    console.log('valor seleccionado', this.value);


  })


})

// validar respuesta primera pregunta cultura
function validar_respuesta_1() {
  clearInterval(identificadorTemporizador);
  temporizador = 61;

  let guardando = document.querySelector("#ver1");

  // Si no se ha seleccionado ninguna respuesta, mostrar alerta
  if (!respuesta_seleccionada) {
    guardando.innerHTML = "⚠️ Por favor, selecciona una respuesta antes de validar.";
    document.getElementById("ver1").style.color = "orange";
    return;
  }

  if (respuesta_seleccionada === respuesta_correcta_1) {
    guardando.innerHTML = `✅ Correcto!!!, la respuesta es: ${respuesta_seleccionada}`;
    document.getElementById("ver1").style.color = "green";
    puntaje += 100;
    document.getElementById("puntos").innerHTML = puntaje + " puntos";
    acierto += 1;
    document.getElementById("acierto-1").innerHTML = acierto + "/3";
  } else {
    guardando.innerHTML = `❌ Incorrecto, la respuesta correcta es: ${respuesta_correcta_1}`;
    document.getElementById("ver1").style.color = "white";
  }
}

// boton ir a la siguiente pregunta
document.getElementById('siguiente').onclick = function() {
  document.getElementById('one').style.display = "none";
  document.getElementById("two").style.display = "block";
};



// se la segunda pregunta de cultura general

// validar respuesta primera pregunta gastronomia
function validar_respuesta_2() {
  clearInterval(identificadorTemporizador);
  temporizador = 61;

  let guardando = document.querySelector("#ver2");

  // Si no se ha seleccionado ninguna respuesta, mostrar alerta
  if (!respuesta_seleccionada) {
    guardando.innerHTML = "⚠️ Por favor, selecciona una respuesta antes de validar.";
    document.getElementById("ver2").style.color = "orange";
    return;
  }

  if (respuesta_seleccionada === respuesta_correcta_2) {
    guardando.innerHTML = `✅ Correcto!!!, la respuesta es: ${respuesta_seleccionada}`;
    document.getElementById("ver2").style.color = "green";
    puntaje += 100;
    document.getElementById("puntos-2").innerHTML = puntaje + " puntos";
    acierto += 1;
    document.getElementById("acierto-2").innerHTML = acierto + "/3";
  } else {
    guardando.innerHTML = `❌ Incorrecto, la respuesta correcta es: ${respuesta_correcta_2}`;
    document.getElementById("ver2").style.color = "white";
  }
}

// boton ir a la siguiente pregunta
document.getElementById('siguiente_2').onclick = function() {  
  document.getElementById("two").style.display = "none";
  document.getElementById('three').style.display = "block";
};





// la tercera pregunta de cultura
function validar_respuesta_3() {
  clearInterval(identificadorTemporizador);
  temporizador = 61;

  let guardando = document.querySelector("#ver3");

  // Si no se ha seleccionado ninguna respuesta, mostrar alerta
  if (!respuesta_seleccionada) {
    guardando.innerHTML = "⚠️ Por favor, selecciona una respuesta antes de validar.";
    document.getElementById("ver3").style.color = "orange";
    return;
  }

  if (respuesta_seleccionada === respuesta_correcta_3) {
    guardando.innerHTML = `✅ Correcto!!!, la respuesta es: ${respuesta_seleccionada}`;
    document.getElementById("ver3").style.color = "green";
    puntaje += 100;
    document.getElementById("puntos-3").innerHTML = puntaje + " puntos";
    acierto += 1;
    document.getElementById("acierto-3").innerHTML = acierto + "/3";
  } else {
    guardando.innerHTML = `❌ Incorrecto, la respuesta correcta es: ${respuesta_correcta_3}`;
    document.getElementById("ver3").style.color = "white";
  }
}

// boton ir a la siguiente pregunta
document.getElementById('siguiente_3').onclick = function() {
  window.location.href = "index-opciones.html";
};


