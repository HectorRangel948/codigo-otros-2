var formulario = document.querySelector("#form") //intenta obtener el objeto de HTML con el id form pero no hay ningún elemento con ese id, probablemente intentaba obtener la etiqueta form, para lo cual es mejor usar getElementsByTagName("form").

formulario.onsubmit = function(e) { //valida la información del formulario con una función anónima que toma como parámetro solo e, 

  e.prevent();
  
  var n = formulario.elements[0] //le asigna el valor del indice 0 del formulario
  var e = formulario.elements[1] //le asigna el valor del indice 1 del formulario pero repite el nombre de la variable del parámetro y va a ocacionar un error
  var na = formulario.elements[2] //le asigna el valor del indice 2 del formulario

  var nombre = n.value //re-asigna el valor de la variable a una nueva 
  var edad = e.value // re-asigna el valor de la variable a una nueva aunque sigue manteniendo la vairable de la función y va a arrojar un error 

  var i = na.selectedIndex // re-asigna el valor de la variable a una nueva 
  var nacionalidad = na.options[i].value //asigna el valor del input utilizando el valor de i para obtener el índice 
  console.log(nombre, edad) //imprime los valores en la consola
  console.log(nacionalidad) 

  if (nombre.length === 0) { //si la longitud del nombre es 0 lanza un error
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) { //si la edad es menor a 18 o mayor a 120 lanza un error
    e.classList.add("error")
  }

if (nombre.length > 0 // vuelve a evaluar la longitud del nombre y las edades 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad) //si se cumplen los requerimientos se agrega al invitado mediante una función
  }
}

var botonBorrar = document.createElement("button") //Crea un elemento de tipo boton
botonBorrar.textContent = "Eliminar invitado" //Le agrega el texto al boton
botonBorrar.id = "boton-borrar" //le agrega un id
var corteLinea = document.createElement("br") //crea un elemento br 
document.body.appendChild(corteLinea) //incrusta el salto de linea
document.body.appendChild(botonBorrar); //incrusta el boton

function agregarInvitado(nombre, edad, nacionalidad) { //función para agregar invitado

  //Evalua si la nacionalidad es ar, mx, vnzl, pero y le asigna el valor dependiendo del país
  if (nacionalidad === "ar") { 
    nacionalidad = "Argentina" 
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados") //obtiene el elemento con id lista de invitdos aunque no hay ninguno en el html

var elementoLista = document.createElement("div") //crea un elemento div
elementoLista.classList.added("elemento-lista") //le asigna la clase elemento-lista
lista.appendChild(elementoLista) //incrusta el elmentoLista a lista

var spanNombre = document.createElement("span") //crea un elemento span
var inputNombre = document.createElement("input") // crea un elemento input
var espacio = document.createElement("br") //crea un elemento br
spanNombre.textContent = "Nombre: " //Le agrega el texto Nombre: al elemento span
inputNombre.value = nombre //le agrega un valor nombre al elemento input
elementoLista.appendChild(spanNombre) //le incrusta el elemento spanNombre a elementoLista
elementoLista.appendChild(inputNombre) //le incrusta el elemento inputNombre a elementoLista
elementoLista.appendChild(espacio) //le incrusta el elemento espacio a elementoLista

function crearElemento(descripcion, valor) { //funcion que toma 2 valores como parámetros 
var spanNombre = document.createElement("span") //crea un elemento span
var inputNombre = document.createElement("input") //crea un elemento input
var espacio = document.createElement("br") //crea un elemento br
spanNombre.textContent = descripcion + ": " //le agrega un texto a spanNombre con la variable descripción 
inputNombre.value = valor //agrega el valor del segundo parámetro
elementoLista.appendChild(spanNombre) //incrusta la variable spanNombre
elementoLista.appendChild(inputNombre) //incrusta la variable inputNombre
elementoLista.appendChild(espacio) //incrusta la variable espacio
}

//invoca a la función y le agrega los valores en los parámetros
crearElemento("Nombre", nombre) 
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button") //crea un elemento boton
botonBorrar.textContent = "Eliminar invitado" //Le agrega texto al boton
botonBorrar.id = "boton-borrar" //le agrega un id
var corteLinea = document.createElement("br") //crea un elemento br
elementoLista.appendChild(corteLinea) //incrusta el elemnto corteLinea a elementoLista
elementoLista.appendChild(botonBorrar); //incrusta el elemnto botonBorrar a elementoLista

botonBorrar.onclick = function() {  //esta función remueve todos l os elementos 
// this.parentNode.style.display = 'none'; con esta linea solo buscaba esconderlos más no los removía 
botonBorrar.parentNode.remove()
  }
}