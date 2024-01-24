let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

//Sirve para asignar textos al documento HTML
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    document.getElementById("reiniciar").removeAttribute("disabled")
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ('p', `Acertaste el numero ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);

        }else{
            if (numeroDeUsuario > numeroSecreto){
                asignarTextoElemento ('p', 'el numero es menor');
                }else{
                    asignarTextoElemento ('p', 'el numero es mayor');
                }
           intentos++;     
           limpiarCaja();
            }
            return;
        }
        
//Sirve para limpiar los numeros de la caja despues de cada juego
function limpiarCaja (){
    document.querySelector('#valorUsuario').value = '';
}    

//Sirve para reinicar las condiciones del juego despues de cada partida
function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto()
    intentos = 1;
}

function nuevoJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalos de nuemero
    //generar numero aleatorio
    //inicializar numero de intentos
    condicionesIniciales();
    //deshabilitar el numero de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

//Sirve para generar un numero aleatorio
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros posibles
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p', 'Llegaste al numero maximo de juegos');
    } else{

    }
    //Si el numero generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();         
    }
         else{
        listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
    }
}

condicionesIniciales();


