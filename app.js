// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let nombreAsignado = [];
let amigosLista = document.getElementById("listaAmigos");
let amigosItemsHTML = "";

function agregarAmigo() {  
    let usuarioNombreAmigo = document.getElementById('amigo').value;
    if (usuarioNombreAmigo == "") {
        alert("Por favor, inserte un nombre.");
        return;
    } else {
        if(amigos.includes(usuarioNombreAmigo)){
            alert(`El nombre ${usuarioNombreAmigo} ya existe`);
            return;
        } else {
            amigos.push(usuarioNombreAmigo);
            recorridoAmigos(amigos);
            return usuarioNombreAmigo;
        }
    }
}

function recorridoAmigos(amigos) { 
    limpiezaDeElementos();   
    for (let index = 0; index < amigos.length; index++) {
        amigosItemsHTML += `<li>Participante: ${amigos[index]}</li>`
    }
    asignacionElementos('#listaAmigos', amigosItemsHTML);
    return;
}

function sortearAmigo() {
    if (amigos.length > 2) {
        let nombreAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
        if (amigos.length == nombreAsignado.length) {
            alert("Ya se asignaron todos los nombres");
            limpiezaDeElementos();
            restaurarElementos();
        } else {
            if (nombreAsignado.includes(nombreAleatorio)) {
                sortearAmigo();
                return;
            } else {
                asignacionElementos("#resultado", `Tu amigo secreto es: ${nombreAleatorio}`);
                nombreAsignado.push(nombreAleatorio);
                limpiezaDeElementos();
                return;     
            }    
        }
    } else {
        alert("Ingrese tres o más participante en el juego");
        return;
    }
}

function asignacionElementos(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiezaDeElementos() {
    amigosItemsHTML = "";
    document.getElementById('amigo').value = "";
    document.querySelector('ul').innerHTML = "";
    return;
}

function restaurarElementos() {
    amigos = [];
    nombreAsignado = [];
    document.querySelector('#listaAmigos').innerHTML = "";
    document.querySelector('#resultado').innerHTML = "";
    return;
}

restaurarElementos();
limpiezaDeElementos();