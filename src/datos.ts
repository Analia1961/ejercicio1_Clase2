// Ejercicio1_Clase2 Ingreso de datos: ejemplo

let btnEnv = document.getElementById("btnEnviar");
let dato = document.forms[0];
let rotulo = document.getElementById("rotulo");

btnEnv.addEventListener("click" , () => {
console.log("el dato ingresado es",dato.value);
});


rotulo.innerHTML = "Ingrese un dato: ";