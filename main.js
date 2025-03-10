// variables de las respuestas correctas

const respuesta_correcta_1 = "Austria";
const respuesta_correcta_2 = "1945";
const respuesta_correcta_3 = "Thomas-Edison";
const respuesta_correcta_1_2 = "Nopal";
const respuesta_correcta_2_2 = "Pollo";
const respuesta_correcta_3_2 = "Chile";
const respuesta_correcta_programacion_1 = "console.log";
const respuesta_correcta_programacion_2 = "undefined";
const respuesta_correcta_programacion_3 = "Object";
const respuesta_correcta_conduccion_1= "90%";
const respuesta_correcta_conduccion_2 = "1 segundo";
const respuesta_correcta_conduccion_3=" 100 km/h ";

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


// obtener el valor de cada pregunta
document.querySelectorAll('.opcion').forEach(opcion => {

  opcion.addEventListener('click', function () {

    respuesta_seleccionada = this.value

    console.log('valor seleccionado', this.value);

  })

})



// ir según la opción seleccionada
function cultura() {
  let categoria = document.getElementById('boton-1').dataset.category;
  if (categoria === 'cultura') {
    window.location.href = "index-cultura.html";
  }
}

function inicializarCategirias() {
  temporizador = 60;
  document.querySelector(".minuto").innerHTML = temporizador;

  identificadorTemporizador = setInterval(function () {
    --temporizador;
    document.querySelector(".minuto").innerHTML = temporizador;


    if (temporizador <= 0) {
      clearInterval(identificadorTemporizador);
    }

  }, 1000);
}

inicializarCategirias();


// validar respuesta primera pregunta cultura
function validar_respuesta_1() {
  clearInterval(identificadorTemporizador);
  temporizador = 60;

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

// boton ir a la siguiente pregunta cultura
document.getElementById('siguiente').onclick = function () {
  document.getElementById('one').style.display = "none";
  document.getElementById("two").style.display = "block";


  document.getElementById("tiempo-2").innerHTML = temporizador;

  identificadorTemporizador = setInterval(function () {
    --temporizador;
    document.getElementById("tiempo-2").innerHTML = temporizador;


    if (temporizador <= 0) {
      clearInterval(identificadorTemporizador);
    }

  }, 1000);
}



// se la segunda pregunta de cultura general

function validar_respuesta_2() {
  clearInterval(identificadorTemporizador);
  temporizador = 60;

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

// boton ir a la siguiente pregunta cultura
document.getElementById('siguiente_2').onclick = function () {
  document.getElementById("two").style.display = "none";
  document.getElementById('three').style.display = "block";

   document.getElementById("tiempo-3").innerHTML = temporizador;

  identificadorTemporizador = setInterval(function () {
    --temporizador;
    document.getElementById("tiempo-3").innerHTML = temporizador;


    if (temporizador <= 0) {
      clearInterval(identificadorTemporizador);
    }

  }, 1000);



};


// la tercera pregunta de cultura
function validar_respuesta_3() {
  clearInterval(identificadorTemporizador);
  temporizador = 60;

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

// este boton siguiente me lleva a los 4 botones del juego
document.getElementById('siguiente_3').onclick = function () {
  window.location.href = "index-opciones.html";
};


// GASTRONOMIA
function gastronomia() {

  let categoria = document.getElementById('boton-2').dataset.category;

  if (categoria === 'gastronomia') {

    window.location.href = "index-gastronomia.html";
  }


}



// validar primera pregunta de gastronomia
function validar_respuesta_1_1() {
  clearInterval(identificadorTemporizador);
  temporizador = 60;

  let guardando = document.querySelector("#ver1-1");

  // Si no se ha seleccionado ninguna respuesta, mostrar alerta
  if (!respuesta_seleccionada) {
    guardando.innerHTML = "⚠️ Por favor, selecciona una respuesta antes de validar.";
    document.getElementById("ver1-1").style.color = "orange";
    return;
  }

  if (respuesta_seleccionada === respuesta_correcta_1_2) {
    guardando.innerHTML = `✅ Correcto!!!, la respuesta es: ${respuesta_seleccionada}`;
    document.getElementById("ver1-1").style.color = "green";
    puntaje += 100;
    document.getElementById("puntosgas").innerHTML = puntaje + " puntos";
    acierto += 1;
    document.getElementById("acierto-gastro1").innerHTML = acierto + "/3";
  } else {
    guardando.innerHTML = `❌ Incorrecto, la respuesta correcta es: ${respuesta_correcta_1_2}`;
    document.getElementById("ver1-1").style.color = "white";
  }
}


// boton ir a la siguiente pregunta gastronomia
function siguiente_pregunta() {
  document.getElementById('pregunta-1').style.display = "none";
  document.getElementById('pregunta-2').style.display = "block";

  
  document.getElementById("tiempo_2").innerHTML = temporizador;

  identificadorTemporizador = setInterval(function () {
    --temporizador;
    document.getElementById("tiempo_2").innerHTML = temporizador;


    if (temporizador <= 0) {
      clearInterval(identificadorTemporizador);
    }

  }, 1000);


}



// validar segunda pregunta de gastronomia
function validar_respuesta_1_2() {
  clearInterval(identificadorTemporizador);
  temporizador = 60;

  let guardando = document.querySelector("#ver1-2");

  // Si no se ha seleccionado ninguna respuesta, mostrar alerta
  if (!respuesta_seleccionada) {
    guardando.innerHTML = "⚠️ Por favor, selecciona una respuesta antes de validar.";
    document.getElementById("ver1-2").style.color = "orange";
    return;
  }

  if (respuesta_seleccionada === respuesta_correcta_2_2) {
    guardando.innerHTML = `✅ Correcto!!!, la respuesta es: ${respuesta_seleccionada}`;
    document.getElementById("ver1-2").style.color = "green";
    puntaje += 100;
    document.getElementById("puntosgas2").innerHTML = puntaje + " puntos";
    acierto += 1;
    document.getElementById("acierto-gastro2").innerHTML = acierto + "/3";
  } else {
    guardando.innerHTML = `❌ Incorrecto, la respuesta correcta es: ${respuesta_correcta_2_2}`;
    document.getElementById("ver1-2").style.color = "white";
  }
}


// boton ir a la siguiente pregunta gastronomia
function siguiente_pregunta_2() {
  document.getElementById('pregunta-2').style.display = "none";
  document.getElementById('pregunta-3').style.display = "block";

  document.getElementById("tiempo_3").innerHTML = temporizador;

  identificadorTemporizador = setInterval(function () {
    --temporizador;
    document.getElementById("tiempo_3").innerHTML = temporizador;


    if (temporizador <= 0) {
      clearInterval(identificadorTemporizador);
    }

  }, 1000);


  
}



// validar tercera pregunta de gastronomia
function validar_respuesta_1_3() {
  clearInterval(identificadorTemporizador);
  temporizador = 60;

  let guardando = document.querySelector("#ver1-3");

  // Si no se ha seleccionado ninguna respuesta, mostrar alerta
  if (!respuesta_seleccionada) {
    guardando.innerHTML = "⚠️ Por favor, selecciona una respuesta antes de validar.";
    document.getElementById("ver1-3").style.color = "orange";
    return;
  }

  if (respuesta_seleccionada === respuesta_correcta_3_2) {
    guardando.innerHTML = `✅ Correcto!!!, la respuesta es: ${respuesta_seleccionada}`;
    document.getElementById("ver1-3").style.color = "green";
    puntaje += 100;
    document.getElementById("puntosgas3").innerHTML = puntaje + " puntos";
    acierto += 1;
    document.getElementById("acierto-gastro3").innerHTML = acierto + "/3";
  } else {
    guardando.innerHTML = `❌ Incorrecto, la respuesta correcta es: ${respuesta_correcta_3_2}`;
    document.getElementById("ver1-3").style.color = "white";
  }
}

// boton siguiente pregunta es ir a la categoria de las 4 opciones de juego
function siguiente_pregunta_3() {
  window.location.href = "index-opciones.html";
};





//PROGRAMACION
function programacion() {

  let categoria = document.getElementById('boton-3').dataset.category;

  if (categoria === 'programacion') {

    window.location.href = "index-programacion.html";
  }
 
}


// primera  pregunta
function validar_respuesta_lession_1() {
  clearInterval(identificadorTemporizador);
  temporizador = 60;

  let guardando = document.querySelector("#ver_respuesta_1_programacion");

  // Si no se ha seleccionado ninguna respuesta, mostrar alerta
  if (!respuesta_seleccionada) {
    guardando.innerHTML = "⚠️ Por favor, selecciona una respuesta antes de validar.";
    document.getElementById("ver_respuesta_1_programacion").style.color = "orange";
    return;
  }

  if (respuesta_seleccionada === respuesta_correcta_programacion_1) {
    
    guardando.innerHTML = `✅ Correcto!!!, la respuesta es: ${respuesta_seleccionada}`;
    document.getElementById("ver_respuesta_1_programacion").style.color = "green";
    puntaje += 100;
    document.getElementById("point").innerHTML = puntaje + " puntos";
    acierto += 1;
    document.getElementById("acierto_pregunta_1").innerHTML = acierto + "/3";
  } else {
    guardando.innerHTML = `❌ Incorrecto, la respuesta correcta es: ${respuesta_correcta_programacion_1}`;
    document.getElementById("ver_respuesta_1_programacion").style.color = "white";
  }
}


// boton ir a la siguiente pregunta programacion
function siguiente_pregunta_programacion(){
  document.getElementById('lession_1').style.display = "none";
  document.getElementById('lession_2').style.display = "block";

  
  document.getElementById("time_2").innerHTML = temporizador;

  identificadorTemporizador = setInterval(function () {
    --temporizador;
    document.getElementById("time_2").innerHTML = temporizador;


    if (temporizador <= 0) {
      clearInterval(identificadorTemporizador);
    }

  }, 1000);


}



// segunda pregunta 
function validar_respuesta_lession_2() {
  clearInterval(identificadorTemporizador);
  temporizador = 60;

  let guardando = document.querySelector("#ver_respuesta_2_programacion");

  // Si no se ha seleccionado ninguna respuesta, mostrar alerta
  if (!respuesta_seleccionada) {
    guardando.innerHTML = "⚠️ Por favor, selecciona una respuesta antes de validar.";
    document.getElementById("ver_respuesta_2_programacion").style.color = "orange";
    return;
  }

  if (respuesta_seleccionada === respuesta_correcta_programacion_2) {
    
    guardando.innerHTML = `✅ Correcto!!!, la respuesta es: ${respuesta_seleccionada}`;
    document.getElementById("ver_respuesta_2_programacion").style.color = "green";
    puntaje += 100;
    document.getElementById("point_2").innerHTML = puntaje + " puntos";
    acierto += 1;
    document.getElementById("acierto_pregunta_2").innerHTML = acierto + "/3";
  } else {
    guardando.innerHTML = `❌ Incorrecto, la respuesta correcta es: ${respuesta_correcta_programacion_2}`;
    document.getElementById("ver_respuesta_1_programacion").style.color = "white";
  }
}


// boton ir a la siguiente pregunta programacion 
function siguiente_pregunta_programacion_2(){
  document.getElementById('lession_2').style.display = "none";
  document.getElementById('lession_3').style.display = "block";

  
  document.getElementById("time_3").innerHTML = temporizador;

  identificadorTemporizador = setInterval(function () {
    --temporizador;
    document.getElementById("time_3").innerHTML = temporizador;


    if (temporizador <= 0) {
      clearInterval(identificadorTemporizador);
    }

  }, 1000);

}



// la tercera pregunta programacion

function validar_respuesta_lession_3() {
  clearInterval(identificadorTemporizador);
  temporizador = 60;

  let guardando = document.querySelector("#ver_respuesta_3_programacion");

  // Si no se ha seleccionado ninguna respuesta, mostrar alerta
  if (!respuesta_seleccionada) {
    guardando.innerHTML = "⚠️ Por favor, selecciona una respuesta antes de validar.";
    document.getElementById("ver_respuesta_3_programacion").style.color = "orange";
    return;
  }

  if (respuesta_seleccionada === respuesta_correcta_programacion_3) {
    
    guardando.innerHTML = `✅ Correcto!!!, la respuesta es: ${respuesta_seleccionada}`;
    document.getElementById("ver_respuesta_3_programacion").style.color = "green";
    puntaje += 100;
    document.getElementById("point_3").innerHTML = puntaje + " puntos";
    acierto += 1;
    document.getElementById("acierto_pregunta_3").innerHTML = acierto + "/3";
  } else {
    guardando.innerHTML = `❌ Incorrecto, la respuesta correcta es: ${respuesta_correcta_programacion_3}`;
    console.log(respuesta_seleccionada + respuesta_correcta_programacion_3)
    document.getElementById("ver_respuesta_3_programacion").style.color = "white";
  }
}


// boton siguiente me lleva a la pagina de las categorias de juego
function siguiente_pregunta_programacion_3(){
  window.location.href = "index-opciones.html";
}

// conduccion


function conduccion() {

  let categoria = document.getElementById('boton-4').dataset.category;

  if (categoria === 'conduccion') {

    window.location.href = "index-conduccion.html";
  }

}

// primera  pregunta
function validar_respuesta_conduccion_1() {
  clearInterval(identificadorTemporizador);
  temporizador = 60;

  let guardando = document.querySelector("#ver_respuesta_1_conduccion");

  // Si no se ha seleccionado ninguna respuesta, mostrar alerta
  if (!respuesta_seleccionada) {
    guardando.innerHTML = "⚠️ Por favor, selecciona una respuesta antes de validar.";
    document.getElementById("ver_respuesta_1_conduccion").style.color = "orange";
    return;
  }

  if (respuesta_seleccionada === respuesta_correcta_conduccion_1) {
    
    guardando.innerHTML = `✅ Correcto!!!, la respuesta es: ${respuesta_seleccionada}`;
    document.getElementById("ver_respuesta_1_conduccion").style.color = "green";
    puntaje += 100;
    document.getElementById("point_manejo_1").innerHTML = puntaje + " puntos";
    acierto += 1;
    document.getElementById("acierto_pregunta_manejo_1").innerHTML = acierto + "/3";
  } else {
    guardando.innerHTML = `❌ Incorrecto, la respuesta correcta es: ${respuesta_correcta_conduccion_1}`;
    document.getElementById("ver_respuesta_1_conduccion").style.color = "white";
  }
}

// boton ir a la siguiente pregunta conduccion
function siguiente_pregunta_conduccion_1(){
  document.getElementById('lession_manejo_1').style.display = "none";
  document.getElementById('lession_manejo_2').style.display = "block";

  document.getElementById("time_manejo_2").innerHTML = temporizador;

  identificadorTemporizador = setInterval(function () {
    --temporizador;
    document.getElementById("time_manejo_2").innerHTML = temporizador;


    if (temporizador <= 0) {
      clearInterval(identificadorTemporizador);
    }

  }, 1000);


}




// segunda  pregunta conduccion
function validar_respuesta_conduccion_2() {
  clearInterval(identificadorTemporizador);
  temporizador = 60;

  let guardando = document.querySelector("#ver_respuesta_2_conduccion");

  // Si no se ha seleccionado ninguna respuesta, mostrar alerta
  if (!respuesta_seleccionada) {
    guardando.innerHTML = "⚠️ Por favor, selecciona una respuesta antes de validar.";
    document.getElementById("ver_respuesta_2_conduccion").style.color = "orange";
    return;
  }

  if (respuesta_seleccionada === respuesta_correcta_conduccion_2) {
    
    guardando.innerHTML = `✅ Correcto!!!, la respuesta es: ${respuesta_seleccionada}`;
    document.getElementById("ver_respuesta_2_conduccion").style.color = "green";
    puntaje += 100;
    document.getElementById("point_manejo_2").innerHTML = puntaje + " puntos";
    acierto += 1;
    document.getElementById("acierto_pregunta_manejo_2").innerHTML = acierto + "/3";
  } else {
    guardando.innerHTML = `❌ Incorrecto, la respuesta correcta es: ${respuesta_correcta_conduccion_2}`;
    document.getElementById("ver_respuesta_2_conduccion").style.color = "white";
  }
}

// boton ir a la siguiente pregunta manejo
function siguiente_pregunta_conduccion_2(){
  document.getElementById('lession_manejo_2').style.display = "none";
  document.getElementById('lession_manejo_3').style.display = "block";

  document.getElementById("time_manejo_3").innerHTML = temporizador;

  identificadorTemporizador = setInterval(function () {
    --temporizador;
    document.getElementById("time_manejo_3").innerHTML = temporizador;


    if (temporizador <= 0) {
      clearInterval(identificadorTemporizador);
    }

  }, 1000);
}



// tercera  pregunta conduccion
function validar_respuesta_conduccion_3() {
  clearInterval(identificadorTemporizador);
  temporizador = 60;

  let guardando = document.querySelector("#ver_respuesta_3_conduccion");

  // Si no se ha seleccionado ninguna respuesta, mostrar alerta
  if (!respuesta_seleccionada) {
    guardando.innerHTML = "⚠️ Por favor, selecciona una respuesta antes de validar.";
    document.getElementById("ver_respuesta_2_conduccion").style.color = "orange";
    return;
  }

  if (respuesta_seleccionada === respuesta_correcta_conduccion_3) {
    
    guardando.innerHTML = `✅ Correcto!!!, la respuesta es: ${respuesta_seleccionada}`;
    document.getElementById("ver_respuesta_3_conduccion").style.color = "green";
    puntaje += 100;
    document.getElementById("point_manejo_3").innerHTML = puntaje + " puntos";
    acierto += 1;
    document.getElementById("acierto_pregunta_manejo_3").innerHTML = acierto + "/3";
  } else {
    guardando.innerHTML = `❌ Incorrecto, la respuesta correcta es: ${respuesta_correcta_conduccion_3}`;
    document.getElementById("ver_respuesta_3_conduccion").style.color = "white";
  }
}

// boton siguiente pregunta es ir a la categorias del juego
function siguiente_pregunta_conduccion_3(){
  window.location.href = "index-opciones.html";
}