const listaDePalabras = [
    'mensaje',
    'pensamiento',
    'libros',
    'prueba',
    'cadena',
    'adivinar',
    'computadora',
    'tecla',
    'juego',
    'variable',
    'tiempo',
    'challenger',
    'funciones',
    'estudiar',
    'alura'   
   ]
 
 //Ici crear las variables globales con las palabras que seran seleccionadas

let palabraOculta = ""; //palabra que esta oculta
let palabraAdivina = ""; //palabra que se va adivinar
let chances = 7;//numero de veces para adivinar la palabra

 /*Botones*/
let botonAdicionarPalabra = document.querySelector("#adicionar-palabra");
let botonEnviarPalabra = document.querySelector("#enviar-palabra");
let formPalabra = document.querySelector("#form-palabra");
let inputPalabra = document.querySelector("#input-palabra");

/*Eventos*/
reiniciar.addEventListener("click", inicio);

document.getElementById("boton").addEventListener("click", comprobar);
botonAdicionarPalabra.addEventListener("click", mostrarInput);
botonEnviarPalabra.addEventListener("click", enviarPalabra);

/******Funciones******/
function inicio() {
  location.reload();
}

iniciar();
function iniciar() {
   
    palabraOculta = listaDePalabras[Math.floor(Math.random()*listaDePalabras.length)];
  
    for (let i=0; i<palabraOculta.length; i++){
        palabraAdivina += "_ ";
    }
    document.getElementById("palabra").innerHTML = palabraAdivina; 
}

function comprobar(){  
    let letra = document.getElementById("letra").value.toLocaleUpperCase();
    palabraOculta = palabraOculta.toLocaleUpperCase();
    let secreto = "";
    for (let i = 0; i < palabraOculta.length; i++) {
        if (letra==palabraOculta[i]) {
            secreto = secreto + letra + " ";
        }else{
            secreto = secreto + palabraAdivina[i*2] + " ";
            //operacion [i*2] para saltar a la posicion del guion a ocupar segun la letra ingresada
        }   
    }
    if(secreto==palabraAdivina) {
        chances--;
        document.getElementById("chance").innerHTML = "Chances en descubrir la palabra secreta: " + chances;
    }

    palabraAdivina = secreto;
    document.getElementById("palabra").innerHTML = palabraAdivina;
   
    if(chances==0){ 
        document.getElementById("palabra").innerHTML= "No lo lograste, intenta de nuevo. La palabra es " + palabraOculta ;
        document.getElementById('palabra').style.color = "red";   
    }
       dibujarFiguraColgada();
      
    
    if (palabraAdivina.search("_") === -1) {
        document.getElementById("palabra").innerHTML = "Lo lograste, felicitaciones!.";
        document.getElementById('palabra').style.color = "green";	
        }
					dibujarFiguraSalvada();
      
    document.getElementById("letra").value= "";
    document.getElementById("letra").focus();
     
}

/*Adicionar palabra */
function mostrarInput() {
    formPalabra.style.display = "flex";
}

function enviarPalabra() {
    let palabra = inputPalabra.value;
    if (!validarPalabra(palabra)) {
      alert(
        "Ingrese la palabra sin tildes, espacios, ni caracteres especiales."
      );
      
      document.getElementById("input-palabra").value= "";
      document.getElementById("input-palabra").focus();

    } else {
      palabra = palabra.toLowerCase();
      listaDePalabras.push(palabra);
      formPalabra.style.display = "none";
      inputPalabra.value = "";
      alert("La palabra se adicionó exitosamente");
    } 
    
  } 
  
  function validarPalabra(param) {
    if (/[^A-Za-zñÑ]/.test(param)) {
      return false;
    }
    return true; 
  }