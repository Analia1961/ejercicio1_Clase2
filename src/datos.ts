// Ingreso de datos: ejemplo

let btnEnv = document.getElementById("btnEnviar");
let formulario = document.forms[0];
let dato = formulario.dato;
let rotulo = document.getElementById("rotulo");

btnEnv.addEventListener("click", () => {
  // TU CÓDIGO VA AQUÍ, POR EJEMPLO:
  console.log("La altura es", dato.value);
  //}
});

rotulo.innerHTML = "Indique la altura de la persona: ";

/*
let btnEnv = document.getElementById("btnEnviar");
let dato = document.forms[0];
let rotulo = document.getElementById("rotulo");

btnEnv.addEventListener("click" , () => {
console.log("el dato ingresado es",dato.value);
});*/

//rotulo.innerHTML = "Ingrese un dato: ";
