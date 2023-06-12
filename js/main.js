let puntos = 0;
let patronMaquina = [];
let patronUsuario = [];

const $botonJugar = document.querySelector('#boton-jugar');

$botonJugar.onclick = comenzarJuego;

function comenzarJuego() {
    deshabilitarInputUsuario();
    reiniciarTurno();
    reiniciarPuntos();
    manejarJuego();
}

function manejarJuego() {
    turnoMaquina();
    habilitarInputUsuario();
}

function turnoMaquina() {
    const cuadroMaquina = elegirCuadroAleatorio();
    patronMaquina.push(cuadroMaquina);
    resaltarCuadro(cuadroMaquina);
}

function habilitarInputUsuario() {
    const $cuadros = document.querySelectorAll('.cuadro');

    $cuadros.forEach(function($cuadro) {
        $cuadro.addEventListener('click', manejarInputUsuario);
    });
}

function deshabilitarInputUsuario() {
    const $cuadros = document.querySelectorAll('.cuadro');

    $cuadros.forEach(function($cuadro) {
        $cuadro.removeEventListener('click', manejarInputUsuario);
    });
}

function manejarInputUsuario(event) {
    const cuadroElegido = event.target;
    patronUsuario.push(cuadroElegido);
    resaltarCuadro(cuadroElegido);
    deshabilitarInputUsuario();
}

function elegirCuadroAleatorio() {
    const $cuadros = document.querySelectorAll('.cuadro');
    const $cuadro = $cuadros[Math.floor(Math.random() * $cuadros.length)];
    return $cuadro;
}

function resaltarCuadro(cuadro) {
    setTimeout(() => {
        cuadro.style.opacity = 0.5;
    
        setTimeout(() => {
            cuadro.style.opacity = 1;
        }, 500);
    }, 500);
}

function reiniciarTurno() {
    document.querySelector('#turno').textContent = ``;
}

function reiniciarPuntos() {
    puntos = 0;
}
