let secuenciaMaquina = [];
let retrasoMaquina = 1000;

let secuenciaUsuario = [];
let retrasoUsuario = 0;

let puntosUsuario = 0;

const $botonJugar = document.querySelector("#boton-jugar");
$botonJugar.onclick = comenzarJuego;

function comenzarJuego() {
    secuenciaMaquina.length = 0;
    secuenciaUsuario.length = 0;
    retrasoMaquina = 1000;
    retrasoUsuario = 0;
    
    turnoMaquina();
}

function turnoMaquina() {
    actualizarTurno("Maquina");
    deshabilitarInputUsuario();

    const $cuadros = document.querySelectorAll(".cuadro");
    const $cuadroMaquina = $cuadros[Math.floor(Math.random() * $cuadros.length)];
    secuenciaMaquina.push($cuadroMaquina);

    for (let i = 0; i < secuenciaMaquina.length; i++) {
        setTimeout(() => {
            iluminarCuadro(secuenciaMaquina[i]);
        }, retrasoMaquina + i * 1000);

        
    }

    setTimeout(() => {
        habilitarInputUsuario();
        actualizarTurno("Usuario");
    }, retrasoMaquina + secuenciaMaquina.length * 500);
}

function iluminarCuadro($cuadro) {
    $cuadro.style.opacity = 0.5;

    setTimeout(() => {
        $cuadro.style.opacity = 1;
    }, 500);
}

function habilitarInputUsuario() {
    const $cuadros = document.querySelectorAll(".cuadro");

    $cuadros.forEach($cuadro => {
        $cuadro.addEventListener("click", manejarInputUsuario);
    });
}

function deshabilitarInputUsuario() {
    const $cuadros = document.querySelectorAll(".cuadro");

    $cuadros.forEach($cuadro => {
        $cuadro.removeEventListener("click", manejarInputUsuario);
    });
}

function manejarInputUsuario(e) {
    const $cuadroUsuario = e.target;
    secuenciaUsuario.push($cuadroUsuario);

    iluminarCuadro($cuadroUsuario);

    const indice = secuenciaUsuario.length - 1;
    if (secuenciaUsuario[indice] !== secuenciaMaquina[indice]) {
        perderJuego();
    } else {
        if (secuenciaUsuario.length === secuenciaMaquina.length) {
            retrasoUsuario = 0;
            secuenciaUsuario.length = 0;
            puntosUsuario++;
            actualizarPuntosUsuario(puntosUsuario);
            turnoMaquina();
        }
    }
}

function perderJuego() {
    puntosUsuario = 0;
    secuenciaMaquina = [];
    secuenciaUsuario = [];

    actualizarTurno("Perdiste!");
    actualizarPuntosUsuario(puntosUsuario);
    deshabilitarInputUsuario();
}

function actualizarPuntosUsuario(puntosUsuario) {
    document.querySelector("#puntos").innerText = `${puntosUsuario}`;
}

function actualizarTurno(tipoJugador) {
    document.querySelector("#turno").innerText = `${tipoJugador}`;
}
